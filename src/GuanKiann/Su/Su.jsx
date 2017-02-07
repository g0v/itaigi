import React from 'react';
import Transmit from 'react-transmit';
import cookie from 'react-cookie';
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

  componentWillMount() {
    this.props.setQueryParams(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
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
    superagent.post(this.props.後端網址 + '平臺項目/投票')
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
    let { suText, suIm, suId, 貢獻者, suData, 後端網址, 華語關鍵字 } = this.props;
    if (貢獻者 == '匿名') 貢獻者 = '沒有人';
    if (suData.結果 == -2) {
      return <div className='su item'></div>;
    }

    let 按呢講的外語 = this.props.按呢講的外語列表.map((外語)=>(<TuiIngHuaGi key={外語.外語項目編號} 外語={外語}/>));
    return (
    <div className='su card'>
      <div className='content'>
        <div className='left floated'>
          <h2 className='ui header'>
          {suText}
          </h2>
        </div>
        <HuatIm 音標={suIm} />
        <例句鈕仔 開例句={this.props.開例句.bind(this)}
          外語={華語關鍵字} 文本資料={suText} 音標資料={suIm}
          />
        <div className='description'>
          {suIm}
          <LaiLik 貢獻者={貢獻者} 後端網址={後端網址} />
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
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(Su, {
  queries: {
    suData({ suId, 後端網址 }) {
      if (!suId) {
        return Promise.resolve({
          '結果': -2,
        });
      }

      return superagent.get(encodeURI(後端網址 + '平臺項目/看詳細內容?平臺項目編號=' + suId))
        .then((res) => Object.assign({
            '結果': 0,
          }, res.body))
        .catch((err) => console.log(err));
    },

    按呢講的外語列表({ suText, 後端網址 }) {
      if (!suText) {
        return Promise.resolve({
          '結果': -2,
        });
      }

      return superagent.get(encodeURI(後端網址 + '平臺項目列表/揣按呢講列表?關鍵字=' + suText))
        .then(({ body }) => body.列表)
        .catch((err) => console.log(err));
    },
  },
});
