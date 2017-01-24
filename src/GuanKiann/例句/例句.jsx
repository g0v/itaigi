import React from 'react';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import 例句表 from './例句表'
import Debug from 'debug';

var debug = Debug('itaigi:例句');

export default class 例句 extends React.Component {


  render() {
    let { 文本資料, 音標資料 } = this.props;
    return (
    <span className=''>
      <button
        className='ui compact icon button'>
        <i className='icon content'></i>
        {/*<i className='icon call'></i>*/}
      </button>
      <例句表 modalIsOpen={true} closeModal={(a)=>(a)} />
    </span>
    );
  }
}

