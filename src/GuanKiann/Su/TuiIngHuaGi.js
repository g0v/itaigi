import React from 'react';
import Transmit from 'react-transmit';
import LaiLik from '../LaiLik/LaiLik';
import HuatIm from '../HuatIm/HuatIm';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:TuiIngHuaGi');

class TuiIngHuaGi extends React.Component {

  render() {
    const { 外語 } = this.props;
    return (
    <span key={外語.外語項目編號}> {外語.外語資料} </span>
    );
  }
}

export default Transmit.createContainer(TuiIngHuaGi, {
  queries: {
  },
});
