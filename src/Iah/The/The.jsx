import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import ABo from '../../GuanKiann/ABo/ABo';
var superagent = require('superagent-promise')(require('superagent'), Promise);

class The extends React.Component {
  propTypes = {
    params: React.PropTypes.object,
    '後端網址': React.PropTypes.string,
    handleKong: React.PropTypes.func,
  }

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
        <div key={guaGi.外語項目編號}>
            <button onClick={this.props.欲提供講法.bind(this, guaGi.外語資料)}>{guaGi.外語資料}</button>
          </div>
        )
      );
    return (
    <div className='main container'>
        <div className='the content'>
          <div className='ui forum segment'>
            <h3>這些詞還沒有人會用台語講</h3>
            <div>
              {無建議的外語列表}
            </div>
            <h3>我就是沒有人，我來講</h3>
            <ABo 後端網址={this.props.後端網址} />
          </div>
        </div>
      </div>
    );
  }

  顯示一個問題()
  {
    return (
      <div className='main container'>
        <div className='the content'>
          <div className='ui forum segment'>
            <h3>我就是沒有人，我知道「{this.props.params.k}」的講法</h3>
            <ABo 華語關鍵字={this.props.params.k}
              後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
              編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
            />
          </div>
        </div>
      </div>
    );
  }
}

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
