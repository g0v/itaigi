import React from 'react';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:例句鈕仔');

export default class 例句鈕仔 extends React.Component {


  render() {
    let { 文本資料, 音標資料,開例句 } = this.props;
    return (
    <span className=''>
      <button
        onClick={開例句.bind(this)}
        className='ui compact icon button'>
        <i className='icon content'></i>
      </button>
    </span>
    );
  }
}

