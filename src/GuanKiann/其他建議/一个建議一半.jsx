import React from 'react';
import Transmit from 'react-transmit';
import 後端 from '../../後端';
import HuatIm from '../HuatIm/HuatIm';
import 例句鈕仔 from '../例句/例句鈕仔';
import TuiIngHuaGi from '../Su/TuiIngHuaGi';
import Promise from 'bluebird';
import Debug from 'debug';

var superagent = require('superagent-promise')(require('superagent'), Promise);
var debug = Debug('itaigi:一个建議');

class 一个建議 extends React.Component {

  render() {
    let { 文本資料, 音標資料, 按呢講的外語列表 } = this.props;
    let 按呢講的外語 = 按呢講的外語列表.map((外語)=>(<TuiIngHuaGi key={外語.外語項目編號} 外語={外語}/>));
    return (
    <div className='ui su card'>
      <div className='content'>
        <div className='left floated'>
          <h2 className='ui header'>
          {文本資料}
          </h2>
        </div>
        <HuatIm 音標={音標資料} />
        <例句鈕仔 來開例句={this.props.來開例句.bind(this)} />
        <div className='description'>
          {音標資料}<br/>
          華語：
          <span className='ui horizontal list large'>
            {按呢講的外語}
          </span>
        </div>
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(一个建議, {
  initialVariables: {},
  fragments: {},
  shouldContainerUpdate(nextVariables) {
    return (
      this.variables.文本資料 != nextVariables.文本資料 ||
      this.variables.音標資料 != nextVariables.音標資料
    );
  },
});
