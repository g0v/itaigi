import React from 'react';
import ToLam from '../GuanKiann/ToLam/ToLam';
import FBTest from '../FBTest/FBTest';

import './App.css';

import Transmit from 'react-transmit';
import { Promise } from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';
var debug = Debug('itaigi:App');

var 後端網址 = 'http://db.itaigi.tw/';

class App extends React.Component {
  kong(k) {
    this.props.history.replaceState(null, '/k/' + k);
  }

  render() {
    console.log('1750');
    console.log(this.props.csrftoken);
    console.log('1751');
    return (
    <div className='app background'>
      <header className='app header'>
        <ToLam pathname={this.props.location.pathname}/>
      </header>
      {React.cloneElement(this.props.children,
      { handleKong: this.kong.bind(this), 後端網址: 後端網址, csrftoken: this.props.csrftoken, 編號: this.props.編號 }
    )}
      <FBTest/>
      <footer className='app footer inverted'>
        <ul className='ui menu container inverted'>
          <li className='item'>
            <a href='https://g0v.hackpad.com/moed7ct-taigi-neologism'>Hackpad</a>
          </li>
          <li className='item'>
            授權條款
          </li>
          <li className='item'>
            <a href='https://g0v.tw/'>g0v</a>
          </li>
          <li className='item'>
            <a href='https://github.com/g0v/itaigi'>GitHub</a>
          </li>
        </ul>
      </footer>
    </div>
    );
  }
}

App.propTypes = {
  history: React.PropTypes.object,
  children: React.PropTypes.object,
};

export default Transmit.createContainer(App, {
  queries: {
    csrftoken() {
      debug('後端網址 %s', 後端網址);
      if (!後端網址) return new Promise((cb) => cb(''));
      return superagent.get(後端網址 + 'csrf/看')
		.withCredentials()
        .then(({ body }) => body.csrftoken);
    },

    編號() {
      if (!後端網址) return new Promise((cb)=>cb('無登入'));
      return superagent.get(後端網址 + '使用者/看編號')
		.withCredentials()
        .then(({ body }) => body.使用者編號);
    },
  },
});
