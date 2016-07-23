import React from 'react';
import ToLam from '../GuanKiann/ToLam/ToLam';
import FBTest from '../FBTest/FBTest';
import Disqus from '../Disqus/Disqus';

import './App.css';

import Transmit from 'react-transmit';
import { Promise } from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';
var debug = Debug('itaigi:App');

var 後端網址 = 'http://db.itaigi.tw/';

// 後端網址 = 'http://private-f0474-tai5uan5gian5gi2phing5thai5.apiary-mock.com/';
// 後端網址 = 'http://localhost:8000/';

class App extends React.Component {
  kong(k) {
    this.props.history.replace('/k/' + k);
  }

  欲提供講法(外語) {
    this.props.history.replace('/t/' + 外語);
  }

  render() {
    return (
    <div className='app background'>
      <header className='app header'>
        <ToLam pathname={this.props.location.pathname}/>
      </header>
        { React.cloneElement(
          this.props.children,
          {
            handleKong: this.kong.bind(this),
            欲提供講法: this.欲提供講法.bind(this),
            後端網址: 後端網址, csrftoken: this.props.csrftoken, 編號: this.props.編號,
          }
        )}
      <h3 className='ui horizontal divider header'>
        <i className='facebook square icon'></i>
        面冊
      </h3>
      <FBTest/>
      <div className='ui container'>
        <Disqus pathname={this.props.location.pathname}/>
      </div>
      <footer className='app footer inverted'>
        <ul className='ui menu container inverted'>
          <li className='item'>
            <a href='https://g0v.hackpad.com/moed7ct-taigi-neologism' target="_blank">Hackpad</a>
          </li>
          <li className='item'>
            授權條款
          </li>
          <li className='item'>
            <a href='https://g0v.tw/' target="_blank">g0v</a>
          </li>
          <li className='item'>
            <a href='https://github.com/g0v/itaigi' target="_blank">GitHub</a>
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
      return (
        superagent.get(後端網址 + 'csrf/看')
        .withCredentials()
        .then(({ body }) => body.csrftoken)
      );
    },

    編號() {
      if (!後端網址) return new Promise((cb)=>cb('無登入'));
      return (
        superagent.get(後端網址 + '使用者/看編號')
        .withCredentials()
        .then(({ body }) => body.使用者編號)
      );
    },
  },
});
