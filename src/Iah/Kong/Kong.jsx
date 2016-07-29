import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import ABo from '../../GuanKiann/ABo/ABo';
import KiuKongHuat from '../../GuanKiann/KiuKongHuat/KiuKongHuat';
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import Disqus from '../../Disqus/Disqus';
import 錯誤 from './錯誤';
import 無結果 from './無結果';
import 有講法 from './有講法';
import 無關鍵字 from './無關鍵字';
import 其他建議 from './其他建議';

import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵'
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:Kong');

class Kong extends React.Component {
  componentWillMount() { this.props.setQueryParams(this.props); }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
  }

  renderTshueSiann() {
    return (
      <無關鍵字 />
        );
  }

  renderTshoGoo() {
    return (
      <錯誤 華語關鍵字={this.props.kongData.關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
        編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
        內容={this.props.kongData.內容}/>
    );
  }

  renderKiatKo() {
    if (this.props.kongData.結果 === 0) {
      return (
        <無結果 華語關鍵字={this.props.kongData.關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken} pathname={this.props.location.pathname}
        編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}/>
      );
    }

    return (
        <有講法 華語關鍵字={this.props.kongData.關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken} pathname={this.props.location.pathname}
        編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
        內容={this.props.kongData.內容}/>
    );
  }

  renderKianGi() {

    return (
        <其他建議
        後端網址={this.props.後端網址}
        內容={this.props.kongData.內容}/>
    );
  }

  render() {
    debug('rendering %o', this.props.kongData);
    return (
    <div className='main container'>
      <nav className='navigation'>
        <Tshue
          defaultValue={this.props.params.k}
          handleSubmit={this.props.handleKong.bind(this)}
          {...this.props}/>
      </nav>
      <div className='kong content'>
        {this.props.kongData.結果 >= 0 ? this.renderKiatKo()
        : this.props.kongData.結果 === -1 ? this.renderTshoGoo()
        : this.renderTshueSiann()}
        {this.props.kongData.結果 >= 0 && this.props.kongData.內容.其他建議.length
          > 0 ? this.renderKianGi() : ''}
      </div>
    </div>
    );
  }
}

Kong.propTypes = {
    setQueryParams: React.PropTypes.func,
    params: React.PropTypes.object,
    kongData: React.PropTypes.object,
    '後端網址': React.PropTypes.string,
    handleKong: React.PropTypes.func,
  };

export default Transmit.createContainer(Kong, {
  queries: {
    kongData({ params, 後端網址 }) {
      if (params === undefined || params.k === undefined) {
        return Promise.resolve({
          '結果': -2,
          '訊息': '沒有提供關鍵字',
        });
      }

      return superagent.get(後端網址 + '平臺項目列表/揣列表?關鍵字=' + params.k)
        .then(({ body }) => ({
          '關鍵字': params.k,
          '結果': body.列表.length,
          '內容': body,
        }))
      .catch((err) => ({
        '關鍵字': params.k,
        '結果': -1,
        '訊息': '發生錯誤',
        '內容': err,
      }));
    },
  },
});
