import React from 'react';
import { Link } from 'react-router';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
import 後端 from '../../後端';
import './名姓.css';
var superagent = require('superagent-promise')(require('superagent'), Promise);

import Debug from 'debug';
var debug = Debug('itaigi:名姓');

class 名姓 extends React.Component {
  render() {
    return (
    <div className='mia main ui text container'>
      <form>
        <label for="senn">姓</label> 
        <input type="text" name="senn" value="馬"/><br/>
        <label for="mia">名</label>
        <input type="text" name="mia" value="英文"/><br/>
        <input type="submit" value="送出"/>
      </form>
    </div>
    );
  }
}

名姓.propTypes = {
  params: React.PropTypes.object,
  查怎樣講: React.PropTypes.func,
};

export default  名姓;
