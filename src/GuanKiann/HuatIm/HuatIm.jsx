import React from 'react';

import './HuatIm.css';

import Transmit from 'react-transmit';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import SoundsMapping from './SoundsMapping';
import Debug from 'debug';

var debug = Debug('itaigi:HuatIm');

export default class HuatIm extends React.Component {
  render() {
    if (!this.props.suData.屬性內容.音標) {
      return <div className='HuatIm hidden'></div>;
    }

    if (SoundsMapping.map(this.props.suData.屬性內容.音標) === undefined) {
      return <div className='HuatIm hidden'></div>;
    }

    return (
      <audio controls>
        <source src={'http://t.moedict.tw/' + SoundsMapping.map(this.props.suData.屬性內容.音標) + '.ogg'} type='audio/ogg' />
      </audio>
    );
  }
};
