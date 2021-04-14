import React from 'react';

import Debug from 'debug';

var debug = Debug('itaigi:例句鈕仔');

export default class 例句鈕仔 extends React.Component {

  render() {
    let { 來開例句 } = this.props;
    if (來開例句 == undefined) {
      return (
        <span className=''>
        </span>
      );
    }

    return (
      <span className=''>
        <button
          onClick={來開例句.bind(this)}
          className='ui compact icon button' title='例句'>
          <i className='icon list'></i>
        </button>
      </span>
    );
  }
}
