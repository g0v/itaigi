import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import ABo from '../../GuanKiann/ABo/ABo';
import KiuKongHuat from '../../GuanKiann/KiuKongHuat/KiuKongHuat';
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import Disqus from '../../Disqus/Disqus';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵'
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:Kong錯誤');

export default class 錯誤 extends React.Component {
  render() {
    return (
    <div className='kong content'>
      <div className='ui segment'>
        <h3>找「{this.props.華語關鍵字}」錯了嗎？</h3>
        {this.props.內容}
        <button className='ui button large olive'>
          <i className='student icon'></i>
          求講法
        </button>
      </div>
      <h3>我會曉，會使按呢講</h3>
      <ABo 華語關鍵字={this.props.華語關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
        編號={this.props.編號} 漢字={this.props.漢字} 音標={this.props.音標}
      />
    </div>
    );
  }
}
