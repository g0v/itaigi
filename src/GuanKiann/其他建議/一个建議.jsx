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
    let { 文本資料, 音標資料 } = this.props;
    let 按呢講的外語 = this.props.按呢講的外語列表.map((外語)=>(<TuiIngHuaGi key={外語.外語項目編號} 外語={外語}/>));
    return (
    <div className='ui su card'>
      <div className='content'>
        <div className='ui header'>
          {文本資料}
          <div className='right floated'>
            <例句鈕仔 來開例句={this.props.來開例句.bind(this)} />
          </div>
        </div>
        <div className='description'>
          {音標資料} <HuatIm 音標={音標資料} />
        </div>
        <div className='subtext'>
          <div>
          華語：
          <div className='ui horizontal list'>
            {按呢講的外語}
          </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(一个建議, {
  initialVariables: {},
  fragments: {
    按呢講的外語列表(建議) {
      let { 文本資料, 音標資料 } = 建議;
      if (!文本資料) {
        return Promise.resolve([]);
      }

      return superagent.get(後端.揣按呢講列表(文本資料, 音標資料))
        .then(({ body }) => body.列表)
        .catch((err) => console.log(err));
    },
  },
  shouldContainerUpdate(nextVariables) {
    return (
      this.variables.文本資料 != nextVariables.文本資料 ||
      this.variables.音標資料 != nextVariables.音標資料
    );
  },
});
