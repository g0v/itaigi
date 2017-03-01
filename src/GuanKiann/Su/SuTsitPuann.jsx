import React from 'react';
import 後端 from '../../後端';
import HuatIm from '../HuatIm/HuatIm';
import 例句鈕仔 from '../例句/例句鈕仔';
import LaiLik from '../LaiLik/LaiLik';

import Debug from 'debug';
var debug = Debug('itaigi:SuTsitPuann');

export default class SuTsitPuann extends React.Component {

  render() {
    let { 文本資料, 音標資料, 貢獻者 } = this.props.詞;
    if (貢獻者 == '匿名') 貢獻者 = '沒有人';

    return (
    <div className='su ui card'>
      <div className='content'>
        <div className='left floated'>
          <h2 className='ui header'>
          {文本資料}
          </h2>
        </div>
        <HuatIm 音標={音標資料} />
        <例句鈕仔 來開例句={this.props.來開例句.bind(this)} />
        <div className='description'>
          {音標資料}
          <LaiLik 貢獻者={貢獻者} />
        </div>
      </div>
    </div>
    );
  }
}

