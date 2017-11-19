import React from 'react';
import ClientRecorder from './ClientRecorder';
import Debug from 'debug';

let debug = Debug('itaigi:LokIm');

export default class LokIm extends React.Component {
  startUserMedia(stream) {
    console.log('startUMedia');
    var input = this.audio_context.createMediaStreamSource(stream);

    this.recorder = new ClientRecorder(input, {
                  numChannels: 1,
                });
    window.input = input;
    window.recorder = this.recorder;
  }

  componentWillMount() {

    try {
      // webkit shim
      window.AudioContext = window.AudioContext || window.webkitAudioContext;
      navigator.getUserMedia = (navigator.getUserMedia ||
                       navigator.webkitGetUserMedia ||
                       navigator.mozGetUserMedia ||
                       navigator.msGetUserMedia);
      window.URL = window.URL || window.webkitURL;

      this.audio_context = new AudioContext;
      window.audio_context = this.audio_context;
    } catch (e) {
      console.log(e);
      alert('No web audio support in this browser!');
    }

    navigator.getUserMedia({ audio: true }, this.startUserMedia.bind(this), function (e) {
      console.log('No live audio input: ' + e);
    });

    // TODO:
    // this.encoderWorker = new MyWorker();
  }

  handleMicClick() {
    console.log('record!');
    this.recorder.clear();
    this.recorder.record();
    this.setState({ recording: 'not empty' });
  }

  handleStopClick() {
    console.log('stop recording');
    console.log(this.recorder);
    window.recorder = this.recorder;
    this.recorder.stop();
    this.recorder.connectAudioData(this.audioElement);
  }

  handlePlayClick() {
    this.audioElement.play();

  }

  renderPlay() {
    if (this.state && this.state.recording) {
      return <button className='ui icon button large' onClick={this.handlePlayClick.bind(this)}>
        <i className='play icon'/>
      </button>;
    } else
      return <div></div>;
  }

  render() {
    return (
      <div className='ui input'>
      <button className='ui icon button large' onClick={this.handleMicClick.bind(this)}>
        <i className='ui unmute icon'/>
      </button>
      <button className='ui icon button large' onClick={this.handleStopClick.bind(this)}>
         <i className='ui stop icon'/>
      </button>
      <audio ref={(r) => this.audioElement = r} src='' />
      {this.renderPlay()}
      </div>
    );
  }
}
