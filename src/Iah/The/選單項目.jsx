import React from 'react';
import Transmit from 'react-transmit';
import 後端 from '../../後端';
var superagent = require('superagent-promise')(require('superagent'), Promise);

import Debug from 'debug';
var debug = Debug('itaigi:選單項目');

class 選單項目 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      顯示幾个: this.預設顯示幾个(),
    };
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
    if (this.props.外語列表.列表.length > this.state.顯示幾个)
    return (
        <button 
          className='ui button teal basic large no-border'
            onClick={this.看閣較濟全開.bind(this)}>
            顯示閣較濟
        </button>
      );
  }
  render()   {
    let 列表 = this.props.外語列表.列表.slice(0,this.state.顯示幾个);

    let 無建議的外語列表 = 列表.map((guaGi) => (
        <button key={guaGi.外語項目編號}
          className='ui button basic large no-border'
          onClick={this.props.欲提供講法.bind(this, guaGi.外語資料)}>
          {guaGi.外語資料}
        </button>
    ));

    return (
        <div className='ui forum segment'>
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

export default Transmit.createContainer(選單項目, {
  initialVariables: {},
  fragments: {
    外語列表() {
      return (
        superagent.get(後端.揣無建議的外語())
        .then(({ body }) => (body))
        .catch((err) => ({
          '列表': [],
          '訊息': '發生錯誤',
          '內容': err,
        }))
      );
    },
  },
});
