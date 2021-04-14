import React from 'react';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';
import 後端 from '../../後端';
import 選單項目 from './選單項目';
import Debug from 'debug';
var debug = Debug('itaigi:顯示選單');

export default class 顯示選單 extends React.Component {
  載入中() {
    return (
      <div className='ui forum segment'>
        <h3>
          <i className='spinner icon'></i>
          載入中，小等一下
        </h3>
      </div>
    );
  }

  render()   {
    return (
      <div className='main container'>
          <div className='the content'>
          <div className='分享'>
            <span>大家來學台語，大家做伙來豐富台語！快分享 iTaigi 給你的朋友知道吧！</span>
            <分享鍵 pathname={this.props.pathname}/>
          </div>
          <選單項目
            欲提供講法={this.props.欲提供講法.bind(this)}
            排序={this.props.排序}
            renderLoading={this.載入中}/>
        </div>
      </div>
    );
  }
}
