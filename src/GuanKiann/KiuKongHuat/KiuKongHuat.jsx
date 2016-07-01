import React from 'react';
import Transmit from 'react-transmit';
import { Promise } from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import debug from 'debug';

class KiuKongHuat extends React.Component {

  static propTypes = {
    華語關鍵字: React.PropTypes.string,
    後端網址: React.PropTypes.string,
    csrftoken: React.PropTypes.string,
  };

  問外語(evt) {
      var 外語內容 = {
        '外語資料': this.props.華語關鍵字,
      };
      superagent.post(this.props.後端網址 + '平臺項目/加外語')
        .withCredentials()
        .set('Content-Type', 'application/x-www-form-urlencoded')
        .set('X-CSRFToken', this.props.csrftoken)
        .send(外語內容)
        .then(({ body }) => (alert('問大家「'+this.props.華語關鍵字 + '」了喲～～')))
        .catch(res => {
          console.log(res);
        });
  }

  render() {
    let { 後端網址 } = this.props;
    return (
      <div className='ui segment'>
        <h3>{this.props.華語關鍵字 || '找什麼？'}</h3>
        <button className='ui button' onClick={this.問外語.bind(this)}>
          求講法
        </button>
      </div>
      );
  }
}

export default Transmit.createContainer(KiuKongHuat, {});
