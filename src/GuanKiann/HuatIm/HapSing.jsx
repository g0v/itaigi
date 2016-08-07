import React from 'react';

import Debug from 'debug';

var debug = Debug('itaigi:HapSing');

export default class HapSing extends React.Component {

  play(id) {
    debug('play')
    document.getElementById(id).play();
  }

  render() {
    var id = this.props.音標;
    return (
      <div className='HuatIm'>
        <audio id={'audio_' + id}>
          <source type='audio/mpeg'
            src={'http://服務.意傳.台灣/%E8%AA%9E%E9%9F%B3%E5%90%88%E6%88%90?%E6%9F%A5%E8%A9%A2%E8%85%94%E5%8F%A3=%E9%96%A9%E5%8D%97%E8%AA%9E&%E6%9F%A5%E8%A9%A2%E8%AA%9E%E5%8F%A5=' + id } />
        </audio>
        <button onClick={this.play.bind(this, 'audio_' + id)}
          className='ui compact icon button'>
          <i className='icon play'></i>
        </button>
      </div>
    );
  }
};
