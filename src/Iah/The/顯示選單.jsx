import React from 'react';
import Transmit from 'react-transmit';
import Disqus from '../../Disqus/Disqus';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';
var superagent = require('superagent-promise')(require('superagent'), Promise);

class 顯示選單 extends React.Component {
  componentWillMount() { this.props.setQueryParams(this.props); }

  render()   {
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
          <div className='分享'>
            <span>大家來學台語，大家做伙來豐富台語！快分享iTaigi給你的朋友知道吧！</span>
            <分享鍵 pathname={this.props.pathname}/>
          </div>
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
          <Disqus pathname={this.props.pathname}/>
        </div>
      </div>
    );
  }
}

export default Transmit.createContainer(顯示選單, {
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
