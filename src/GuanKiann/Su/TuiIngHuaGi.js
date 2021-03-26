import React from 'react';
import { Link } from 'react-router';
import Debug from 'debug';
import { gaUaGi } from '../../GA';

const debug = Debug('itaigi:TuiIngHuaGi');

export default class TuiIngHuaGi extends React.Component {
  render() {
    const { 外語 } = this.props;
    return (
      <Link
        className="item"
        to={`/k/${外語.外語資料}`}
        key={外語.外語項目編號}
        onClick={gaUaGi(外語.外語資料)}
      >
        {外語.外語資料}
      </Link>
    );
  }
}
