import React from 'react';
import Transmit from 'react-transmit';
import HuatIm from '../HuatIm/HuatIm';
import 例句鈕仔 from '../例句/例句鈕仔';
import TuiIngHuaGi from './TuiIngHuaGi';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:一个建議');

class 一个建議 extends React.Component {

  componentWillMount() {
    this.props.setQueryParams(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.文本資料 === this.props.文本資料 &&
      nextProps.音標資料 === this.props.音標資料) return;
    this.props.setQueryParams(nextProps);
  }

  render() {
    let { 文本資料, 音標資料 } = this.props;
    let 按呢講的外語 = this.props.按呢講的外語列表.map((外語)=>(<TuiIngHuaGi key={外語.外語項目編號} 外語={外語}/>));
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
  queries: {
    按呢講的外語列表({ 文本資料, 後端網址 }) {
      if (!文本資料) {
        return Promise.resolve([]);
      }

      return superagent.get(encodeURI(後端網址 + '平臺項目列表/揣按呢講列表?關鍵字=' + 文本資料))
        .then(({ body }) => body.列表)
        .catch((err) => console.log(err));
    },
  },
});
