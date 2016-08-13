import React from 'react';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);

import Debug from 'debug';

var debug = Debug('itaigi:抱去摸');

export default class 抱去摸 extends React.Component {
  
  render() {
    return (
    <div className='main container'>
      <div className='kong content'>
        XXD
      </div>
    </div>
    );
  }
}
