import React from 'react';

import HuatIm from '../HuatIm/HuatIm';
import 漢字臺羅一詞 from './漢字臺羅一詞';
import 複製例句鈕仔 from './複製例句鈕仔';
import './顯示例句一句.css';

import Debug from 'debug';
var debug = Debug('itaigi:顯示例句一句');

export default class 顯示例句一句 extends React.Component {
  render() {
    let 漢字陣列 = [];
    let 臺羅陣列 = [];

    let { 第幾句, 例句 } = this.props;

    例句.綜合標音.map(function (標音) {
      漢字陣列 = 漢字陣列.concat(標音.漢字.split(' '));
      臺羅陣列 = 臺羅陣列.concat(標音.臺羅閏號調.replace(/--/g, ' --').split(' '));
    });

    let 句 = 漢字陣列.map((分詞, i)=>(
      <漢字臺羅一詞 key={i} 漢字={漢字陣列[i]} 臺羅={臺羅陣列[i]}/>
     ));
    return (
      <div className='ui item'>
        <p>
          <span className="ui large teal circular label">{第幾句}</span>
          <HuatIm 音標={臺羅陣列.join(' ')} />
          <複製例句鈕仔
            漢字={例句.漢字}
            臺羅={例句.臺羅}
            華語={例句.華語}/>
        </p>
        <p className='le7ku3 tai5'>{句}</p>
        <p className='le7ku3 hua5'>（{例句.華語}）</p>
      </div>
    );
  }
}

