import React from 'react';

import Debug from 'debug';
import { gaThiann } from '../../GA'

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
    let { hanji, 音標 } = this.props
    let 音樂 = this.refs.音樂;
    if (音樂 != null) {
      音樂.play();
    }
    gaThiann(hanji, 音標)
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
              encodeURI('https://hts.ithuan.tw/文本直接合成?查詢腔口=台語&查詢語句=') +
              encodeURIComponent(標漢字音標)
            }
           />
        </audio>
        <button onClick={this.play.bind(this)}
          className='ui compact icon button' title='發音'>
          <i className='icon play'></i>
        </button>
      </span>
    );
  }
};
