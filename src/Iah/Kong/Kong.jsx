import React from 'react';
import Transmit from 'react-transmit';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import 錯誤 from './錯誤';
import 無結果 from './無結果';
import 有講法 from './有講法';
import 無關鍵字 from './無關鍵字';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import './Kong.css';

import Debug from 'debug';

var debug = Debug('itaigi:Kong');

class Kong extends React.Component {
  componentWillMount() { this.props.setQueryParams(this.props); }

  componentWillReceiveProps(nextProps) {
    if (nextProps.外語 === this.props.外語) return;
    this.props.setQueryParams(nextProps);
  }

  render無關鍵字() {
    return (
      <無關鍵字 後端網址={this.props.後端網址}/>
    );
  }

  render錯誤() {
    return (
      <錯誤 華語關鍵字={this.props.kongData.關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
        編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
        內容={this.props.kongData.內容}/>
    );
  }

  render無結果() {
    return (
      <無結果 華語關鍵字={this.props.kongData.關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
        pathname={this.props.location.pathname}
        編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
        內容={this.props.kongData.內容}/>
    );
  }

  render有講法() {
    return (
      <有講法 華語關鍵字={this.props.kongData.關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
        pathname={this.props.location.pathname}
        編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
        內容={this.props.kongData.內容}/>
    );
  }

  render() {
    debug('rendering %o', this.props.kongData);
    return (
    <div className='main container'>
      <nav className='navigation'>
        <Tshue
          defaultValue={this.props.外語}
          查怎樣講={this.props.查怎樣講.bind(this)}
          {...this.props}/>
      </nav>
      <div className='kong content'>
        {
          this.props.kongData.結果 > 0 ? this.render有講法()
          : this.props.kongData.結果 === 0 ? this.render無結果()
          : this.props.kongData.結果 === -1 ? this.render錯誤()
          : this.render無關鍵字()
        }
      </div>
    </div>
    );
  }
}

Kong.propTypes = {
    setQueryParams: React.PropTypes.func,
    kongData: React.PropTypes.object,
    '後端網址': React.PropTypes.string,
    查怎樣講: React.PropTypes.func,
  };

export default Transmit.createContainer(Kong, {
  queries: {
    kongData({ 外語, 後端網址 }) {
      if (外語 === undefined) {
        return Promise.resolve({
          '結果': -2,
          '訊息': '沒有提供關鍵字',
        });
      }

      return superagent.get(encodeURI(後端網址 + '平臺項目列表/揣列表?關鍵字=' + 外語))
        .then(({ body }) => ({
          '關鍵字': 外語,
          '結果': body.列表.length,
          '內容': body,
        }))
      .catch((err) => ({
        '關鍵字': 外語,
        '結果': -1,
        '訊息': '發生錯誤',
        '內容': err,
      }));
    },
  },
});
