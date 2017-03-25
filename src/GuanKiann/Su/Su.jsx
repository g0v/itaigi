import React from 'react';
import Transmit from 'react-transmit';
import cookie from 'react-cookie';
import 後端 from '../../後端';
import LaiLik from '../LaiLik/LaiLik';
import HuatIm from '../HuatIm/HuatIm';
import 例句鈕仔 from '../例句/例句鈕仔';
import TuiIngHuaGi from './TuiIngHuaGi';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';
import './Su.css';

var debug = Debug('itaigi:Su');

class Su extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      按呢講好: props.suData.按呢講好,
      按呢無好: props.suData.按呢無好,
      voted: cookie.load('vote_' + props.suId),
    };
  }

  投票(evt) {
    if (cookie.load('vote_' + this.props.suId)) {
      alert('這句投過了!');
      return;
    }

    var 票 = {
      平臺項目編號: this.props.suId,
      decision: evt,
    };
    superagent.post(後端.投票())
      .withCredentials()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('X-CSRFToken', this.props.csrftoken)
      .send(票)
      .then(({ body }) => {if (body.success) cookie.save('vote_' + body.suId, evt, { path: '/' });})
      .catch(res => {
        console.log(res);
      });
    if (evt === '按呢講好')
      this.setState({
        按呢講好: this.props.suData.按呢講好 + 1,
        voted: evt,
      });
    else if (evt === '按呢無好')
      this.setState({
        按呢無好: this.props.suData.按呢無好 + 1,
        voted: evt,
      });
  }

  render() {
    let { suText, suIm, suId, 貢獻者, suData } = this.props;
    if (貢獻者 == '匿名') 貢獻者 = '沒有人';
    if (suData.結果 == -2) {
      return <div className='su item'></div>;
    }

    let 按呢講的外語 = this.props.按呢講的外語列表.map((外語)=>(<TuiIngHuaGi key={外語.外語項目編號} 外語={外語}/>));
    return (
    <div className='su ui card'>
      <div className='content'>
        <div className='left floated'>
          <h2 className='ui header'>
          {suText}
          </h2>
        </div>
        <HuatIm 音標={suIm} />
        <例句鈕仔 來開例句={this.props.來開例句.bind(this)} />
        <div className='description'>
          {suIm}
          <LaiLik 貢獻者={貢獻者} />
          華語：
          <span className='ui horizontal list large'>
            {按呢講的外語}
          </span>
        </div>
        <br/>
        <div className='ui compact menu large'>
          <a className={
            'item'
            + (this.state.voted ? ' disabled' : '')}
            onClick={this.投票.bind(this, '按呢講好')}>
            <i className='icon heart'></i>
            按呢講好 <span className='floating ui label yellow'>{this.state.按呢講好 || suData.按呢講好}</span>
          </a>
          <a className={
            'item'
            + (this.state.voted ? ' disabled' : '')}
            onClick={this.投票.bind(this, '按呢無好')}>
            <i className='icon help circle'></i>
            按呢怪怪 <span className='floating ui label orange'>{this.state.按呢無好 || suData.按呢無好}</span>
          </a>
        </div>
        <div className='report'>
          <a onClick={
            () => {
              let appVersion = navigator.appVersion;
              let d = new Date();
              let n = d.toISOString();
              console.log('沒有發音\n' + '時間：' + n + '\n' + 'appVersion: ' + appVersion);
            }
          }>
            沒有發音
          </a>
        </div>
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(Su, {
  initialVariables: {},
  fragments: {
    suData({ 詞 }) {
      return superagent.get(後端.平臺項目內容(詞.新詞文本項目編號))
        .then((res) => Object.assign({
            '結果': 0,
          }, res.body))
        .catch((err) => console.log(err));
    },

    按呢講的外語列表({ 詞 }) {
      return superagent.get(後端.揣按呢講列表(詞.文本資料, 詞.音標資料))
        .then(({ body }) => body.列表)
        .catch((err) => console.log(err));
    },
  },
  shouldContainerUpdate(nextVariables) {
    return this.variables.詞 != nextVariables.詞;
  },
});
