import React from 'react';

import Debug from 'debug';

var debug = Debug('itaigi:HapSing');

export default class HapSing extends React.Component {

  componentDidUpdate(prevProps, prevState) {
    if (prevProps.音標 === this.props.音標) return;
    let 音樂 = this.refs.音樂;
    if (音樂 != null) {
      音樂.load();
    }
  }

  play() {
    let 音樂 = this.refs.音樂;
    if (音樂 != null) {
      音樂.play();
    }
  }

  render() {
    let { 音標 } = this.props;
    let 標漢字音標 = (
      音標
      .replace('/', ' 。 ').trim()
    );
    return (
      <span className='HuatIm'>
        <audio ref="音樂">
          <source type='audio/x-wav'
            src={
              encodeURI('https://voice.xn--v0qr21b.xn--kpry57d/文本直接合成?查詢腔口=閩南語&查詢語句=') +
              encodeURIComponent(標漢字音標)
            }
           />
        </audio>
        <button onClick={this.play.bind(this)}
          className='ui compact icon button'>
          <i className='icon play'></i>
        </button>
      </span>
    );
  }
};

