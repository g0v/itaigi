import React from 'react';
import 後端 from '../../後端';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import { browserHistory } from 'react-router';

import Debug from 'debug';
var debug = Debug('itaigi:選單項目');

class 選單項目 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      顯示幾个: this.預設顯示幾个(),
      外語列表: {
        列表: [],
      },
      拿資料中: false,
      排序: null,
    };
  }

  componentWillMount() {
    this.要看哪一種(this.props.排序);
  }

  要看哪一種(排序) {
    if (this.拿資料中 || this.排序已經是這個(排序)) return;
    this.setState({
      拿資料中: true,
      顯示幾个: this.預設顯示幾个(),
      排序,
    });

    browserHistory.replace('/t?order=' + 排序);

    superagent.get(後端.揣無建議的外語(排序))
    .then(({ body }) => {
      this.setState({
        拿資料中: false,
        外語列表: body,
      });
    })
    .catch((err) => ({
      '列表': [],
      '訊息': '發生錯誤',
      '內容': err,
    }));
  }

  排序已經是這個(排序) {
    return this.state.排序 == 排序;
  }

  預設顯示幾个() {
    return 200;
  }

  看閣較濟全開() {
    let { 顯示幾个 } = this.state;
    顯示幾个 += this.預設顯示幾个();
    this.setState({ 顯示幾个 });
  }

  看閣較濟() {
    if (this.state.外語列表.列表.length > this.state.顯示幾个)
    return (
        <button
          className='ui button teal basic large no-border'
            onClick={this.看閣較濟全開.bind(this)}>
            顯示閣較濟
        </button>
      );
  }

  按鈕類別給這個(排序) {
    return `ui button teal large ${this.state.排序 == 排序 ? '' : 'basic'}`;
  }

  render() {
    let 列表 = this.state.外語列表.列表.slice(0, this.state.顯示幾个);

    let 無建議的外語列表 = 列表.map((guaGi) => (
        <button key={guaGi}
          className='ui button basic large no-border'
          onClick={this.props.欲提供講法.bind(this, guaGi)}>
          {guaGi}
        </button>
    ));

    return (
        <div className='ui forum segment'>
          <h3>
            你想挑戰哪一區
          </h3>
          <div>
            <button className={this.按鈕類別給這個('hot')} onClick={this.要看哪一種.bind(this, 'hot')}>
              熱門
            </button>
            <button className={this.按鈕類別給這個('new')} onClick={this.要看哪一種.bind(this, 'new')}>
              最新
            </button>
          </div>
          <h3>
            <i className='spinner icon'></i>
            {
              列表.length > 0
              ? '這些詞還沒有人會用台語講'
              : '真的很會，所有詞都有台語講法了！不可能啦快去想問題.....'
            }
          </h3>
          <div>
            {無建議的外語列表}
            {this.看閣較濟()}
          </div>
        </div>
    );
  }
}

export default 選單項目;
