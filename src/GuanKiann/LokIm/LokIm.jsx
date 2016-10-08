import React from 'react';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
var MediaStreamRecorder = require('msr');

import Debug from 'debug';

let debug = Debug('itaigi:LokIm');
var mediaRecorder;
var audio;

class LokIm extends React.Component {
    componentWillMount() {

        var mediaConstraints = {
            audio: true
        };

        navigator.getUserMedia(mediaConstraints, onMediaSuccess, onMediaError);

        function onMediaSuccess(stream) {
            mediaRecorder = new MediaStreamRecorder(stream);
            mediaRecorder.mimeType = 'audio/ogg';
            mediaRecorder.ondataavailable = function (blob) {
                // POST/PUT "Blob" using FormData/XHR2
                var blobURL = URL.createObjectURL(blob);
                debug('blob: ', blob);
                debug('blogurl: ', blobURL);
                mediaRecorder.stop();
                debug('ondataavailabe stop');
                
                audio = document.createElement('audio');
                audio.src = blobURL;
                debug(audio);
                audio.play();
            };
        }

        function onMediaError(e) {
            console.error('media error', e);
        }

    }

    handleMicClick() {
        console.log('record!');
        mediaRecorder.start(5000);
        this.setState({ recording: 'not empty' });
    }

    handlePlayClick() {
        audio.play();
        return;
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
                <audio ref={(r) => this.audioElement = r} src='' />
                {this.renderPlay()}
                </div>
               );
    }
}

export default Transmit.createContainer(LokIm, {});

