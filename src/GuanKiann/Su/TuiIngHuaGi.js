import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import Debug from 'debug';

var debug = Debug('itaigi:TuiIngHuaGi');

class TuiIngHuaGi extends React.Component {

  render() {
    const { 外語 } = this.props;
    return (
      <Link className='item' to={'/k/' + 外語.外語資料} key={外語.外語項目編號}> {外語.外語資料} </Link>
    );
  }
}

export default Transmit.createContainer(TuiIngHuaGi, {
  queries: {
  },
});
