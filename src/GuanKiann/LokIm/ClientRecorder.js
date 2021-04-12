const MainWorkerScript = require('raw!./RecordWorker.js');
var EncoderWorkerScript = require('raw!./mp3Worker.js');

var EncoderWorkerScript = '';
const testScript = require('raw!./SimpleWorker.js');

export default class ClientRecorder {
  constructor(source, cfg) {
    const config = cfg || {};
    const bufferLen = config.bufferLen || 4096;
    const numChannels = config.numChannels || 2;
    this.context = source.context;
    this.node = (this.context.createScriptProcessor
                   || this.context.createJavaScriptNode).call(this.context,
      bufferLen, numChannels, numChannels);
    window.rnode = this.node;
    const worker = new Worker(window.URL.createObjectURL(new Blob([MainWorkerScript])));
    window.worker = worker;
    const encoderWorker = new Worker(window.URL.createObjectURL(new Blob([EncoderWorkerScript])));
    worker.postMessage({
      command: 'init',
      config: {
        sampleRate: this.context.sampleRate,
        numChannels,
      },
    });
    let recording = false;
    let currCallback = false;

    this.node.onaudioprocess = function (e) {
      if (!recording) return;
      const buffer = [];
      for (let channel = 0; channel < numChannels; channel++) {
        buffer.push(e.inputBuffer.getChannelData(channel));
      }
      worker.postMessage({
        command: 'record',
        buffer,
      });
    };

    this.configure = function (cfg) {
      for (const prop in cfg) {
        if (cfg.hasOwnProperty(prop)) {
          config[prop] = cfg[prop];
        }
      }
    };

    this.record = function () {
      recording = true;
    };

    this.stop = function () {
      recording = false;
    };

    this.clear = function () {
      worker.postMessage({ command: 'clear' });
    };

    this.getBuffer = function (cb) {
      currCallback = cb || config.callback;
      worker.postMessage({ command: 'getBuffer' });
    };

    this.exportWAV = function (cb, type) {
      currCallback = cb || config.callback;
      type = type || config.type || 'audio/wav';
      if (!currCallback) throw new Error('Callback not set');
      worker.postMessage({
        command: 'exportWAV',
        type,
      });
    };

    // Mp3 conversion
    worker.onmessage = function (e) {
      console.log('msg:', e.data);
      const blob = e.data;
      // console.log("the blob " +  blob + " " + blob.size + " " + blob.type);

      let arrayBuffer;
      const fileReader = new FileReader();

      fileReader.onload = function () {
        arrayBuffer = this.result;
        const buffer = new Uint8Array(arrayBuffer);
        const data = parseWav(buffer);

        console.log(data);
        console.log('Converting to Mp3');
        encoderWorker.postMessage({
          cmd: 'init',
          config: {
            mode: 3,
            channels: 1,
            samplerate: data.sampleRate,
            bitrate: data.bitsPerSample,
          },
        });

        encoderWorker.postMessage({ cmd: 'encode', buf: Uint8ArrayToFloat32Array(data.samples) });
        encoderWorker.postMessage({ cmd: 'finish' });
        encoderWorker.onmessage = function (e) {
          if (e.data.cmd == 'data') {
            console.log('Done converting to Mp3');
            /* var audio = new Audio();
          audio.src = 'data:audio/mp3;base64,'+encode64(e.data.buf);
          audio.play(); */

            // console.log ("The Mp3 data " + e.data.buf);

            const mp3Blob = new Blob([new Uint8Array(e.data.buf)], { type: 'audio/mp3' });
            uploadAudio(mp3Blob);

            const url = `data:audio/mp3;base64,${encode64(e.data.buf)}`;
            const li = document.createElement('li');
            const au = document.createElement('audio');
            const hf = document.createElement('a');

            au.controls = true;
            au.src = url;
            hf.href = url;
            hf.download = `audio_recording_${new Date().getTime()}.mp3`;
            hf.innerHTML = hf.download;
            li.appendChild(au);
            li.appendChild(hf);
            recordingslist.appendChild(li);
          }
        };
      };

      console.log(blob);
      fileReader.readAsArrayBuffer(blob);
      currCallback(blob);
    };

    function encode64(buffer) {
      let binary = '';
      const bytes = new Uint8Array(buffer);
      const len = bytes.byteLength;

      for (let i = 0; i < len; i++) {
        binary += String.fromCharCode(bytes[i]);
      }
      return window.btoa(binary);
    }

    this.buildAudio = function () {
      const au = document.createElement('audio');
      au.controls = true;
      this.exportWAV((blob) => {
        console.log('buildAudio', blob);
        // au.src = 'data:audio/wav;base64,'+encode64(blob);
        au.src = URL.createObjectURL(blob);
      });
      return au;
    };

    this.connectAudioData = function (au) {
      this.exportWAV((blob) => {
        au.src = URL.createObjectURL(blob);
      });
    };

    function parseWav(wav) {
      function readInt(i, bytes) {
        let ret = 0;
        let shft = 0;

        while (bytes) {
          ret += wav[i] << shft;
          shft += 8;
          i++;
          bytes--;
        }
        return ret;
      }
      if (readInt(20, 2) != 1) throw 'Invalid compression code, not PCM';
      if (readInt(22, 2) != 1) throw 'Invalid number of channels, not 1';
      return {
        sampleRate: readInt(24, 4),
        bitsPerSample: readInt(34, 2),
        samples: wav.subarray(44),
      };
    }

    function Uint8ArrayToFloat32Array(u8a) {
      const f32Buffer = new Float32Array(u8a.length);
      for (let i = 0; i < u8a.length; i++) {
        let value = u8a[i << 1] + (u8a[(i << 1) + 1] << 8);
        if (value >= 0x8000) value |= ~0x7FFF;
        f32Buffer[i] = value / 0x8000;
      }
      return f32Buffer;
    }

    function uploadAudio(mp3Data) {
      const reader = new FileReader();
      reader.onload = function (event) {
        const fd = new FormData();
        const mp3Name = encodeURIComponent(`audio_recording_${new Date().getTime()}.mp3`);
        console.log(`mp3name = ${mp3Name}`);
        fd.append('fname', mp3Name);
        fd.append('data', event.target.result);
        $.ajax({
          type: 'POST',
          url: 'upload.php',
          data: fd,
          processData: false,
          contentType: false,
        }).done((data) => {
          console.log(data);
        });
      };
      reader.readAsDataURL(mp3Data);
    }

    source.connect(this.node);
    this.node.connect(this.context.destination); // this should not be necessary
  }

  /* Recorder.forceDownload = function(blob, filename){
	console.log("Force download");
    var url = (window.URL || window.webkitURL).createObjectURL(blob);
    var link = window.document.createElement('a');
    link.href = url;
    link.download = filename || 'output.wav';
    var click = document.createEvent("Event");
    click.initEvent("click", true, true);
    link.dispatchEvent(click);
  } */
}
