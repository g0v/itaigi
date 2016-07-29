import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import ABo from '../../GuanKiann/ABo/ABo';
import Disqus from '../../Disqus/Disqus';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵'
var superagent = require('superagent-promise')(require('superagent'), Promise);

class The extends React.Component {
  componentWillMount() { this.props.setQueryParams(this.props); }

  render() {
    if (!this.props.params.k) {
      return this.顯示選單();
    } else {
      return this.顯示一個問題();
    }
  }

  顯示選單()
  {
    let 無建議的外語列表 = this.props.外語列表.列表.map(
      (guaGi)=>(
        <button key={guaGi.外語項目編號}
          className='ui button basic primary large'
          onClick={this.props.欲提供講法.bind(this, guaGi.外語資料)}>
          {guaGi.外語資料}
        </button>
      )
    );
    return (
    <div className='main container'>
      <div className='the content'>
        <div className='ui forum segment'>
          <h3>
            <i className='spinner icon'></i>
            {this.props.外語列表.列表.length > 0
              ? '這些詞還沒有人會用台語講'
              : '真的很會，所有詞都有台語講法了！不可能啦快去想問題.....'}
          </h3>
          <div>
            {無建議的外語列表}
          </div>
        </div>
        <Disqus pathname={this.props.location.pathname}/>
      </div>
    </div>
    );
  }

  顯示一個問題()
  {
    return (
      <div className='main container'>
        <div className='the content'>
          <分享鍵 pathname={this.props.location.pathname} 華語關鍵字={this.props.params.k} />
          <div className='ui forum segment'>
            <h3 className='ui header'>
              <i className='cloud upload icon'></i>
              我會曉，「{this.props.params.k}」會使按呢講
            </h3>
            <ABo 華語關鍵字={this.props.params.k}
              後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
              編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
            />
          </div>
          <Disqus pathname={this.props.location.pathname}/>
        </div>
      </div>
    );
  }
}

The.propTypes = {
    params: React.PropTypes.object,
    '後端網址': React.PropTypes.string,
    handleKong: React.PropTypes.func,
  };

export default Transmit.createContainer(The, {
  queries: {
    外語列表({ 後端網址 }) {
      if (後端網址 === undefined) {
        return Promise.resolve({
          '列表': [],
        });
      }

      return (
        superagent.get(後端網址 + '平臺項目列表/揣無建議的外語')
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
