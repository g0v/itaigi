import React from 'react';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:TuiIngHuaGi');

class TuiIngHuaGi extends React.Component {

  render() {
    const { 外語 } = this.props;
    return (
    <a className='item' href={'/k/' + 外語.外語資料} key={外語.外語項目編號}> {外語.外語資料} </a>
    );
  }
}

export default Transmit.createContainer(TuiIngHuaGi, {
  queries: {
  },
});
