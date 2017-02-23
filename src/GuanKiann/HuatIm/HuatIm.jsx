import React from 'react';
import SoundsMapping from './SoundsMapping';
import HapSing from './HapSing';
import Debug from 'debug';
import './HuatIm.css';

var debug = Debug('itaigi:HuatIm');

export default class HuatIm extends React.Component {

  play(id) {
    document.getElementById(id).play();
  }

  render() {
    let { 音標 } = this.props;
    if (!音標) {
      return <span className='HuatIm hidden'></span>;
    }

    let id = SoundsMapping.map(音標);
    if (id === undefined) {
      return <HapSing 音標={音標} />;
    }

    return (
    <span className='HuatIm'>
      <audio id={'audio_' + id}>
        <source type='audio/mpeg'
          src={'http://t.moedict.tw/' + id + '.mp3'} />
      </audio>
      <button onClick={this.play.bind(this, 'audio_' + id)}
        className='ui compact icon button'>
        <i className='icon play'></i>
      </button>
    </span>
    );
  }
};
