import React from 'react';
import ToLam from '../GuanKiann/ToLam/ToLam';
import 後端 from './後端';
import 例句表 from '../GuanKiann/例句/例句表';

import './App.css';

import Transmit from 'react-transmit';
import { Promise } from 'bluebird';
import { Link } from 'react-router';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';
var debug = Debug('itaigi:App');

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { csrftoken: '', 編號: '無登入' };
    this.看編號();
  }

  看編號() {
    superagent.get(encodeURI(後端.網址() + 'csrf/看'))
        .withCredentials()
        .then(({ body }) => (this.setState({ csrftoken: body.csrftoken })))
        .catch((err) => (debug(err)));
    superagent.get(encodeURI(後端.網址() + '使用者/看編號'))
        .withCredentials()
        .then(({ body }) => (this.setState({ 編號: body.使用者編號 })))
        .catch((err) => (debug(err)));
  }

  查怎樣講(外語) {
    this.props.history.replace('/k/' + 外語);
  }

  欲提供講法(外語) {
    this.props.history.replace('/t/' + 外語);
  }

  開例句(外語, 漢字, 台羅) {
    this.props.history.replace(
      '/k/' + encodeURIComponent(外語) +
      '/' + encodeURIComponent(漢字) +
      '/' + encodeURIComponent(台羅)
      );
  }

  關例句(外語) {
    this.查怎樣講(外語);
  }

  render() {
    const { k, han, lo } = this.props.params;
    return (
    <div className='app background'>
      <header className='app header'>
        <ToLam pathname={this.props.location.pathname}/>
      </header>
        { React.cloneElement(
          this.props.children,
          {
            查怎樣講: this.查怎樣講.bind(this),
            欲提供講法: this.欲提供講法.bind(this),
            後端網址: 後端.網址(), csrftoken: this.state.csrftoken, 編號: this.state.編號,
            開例句: this.開例句.bind(this),
          }
        )}
      <footer className='app footer inverted'>
        <ul className='ui menu container inverted'>
          <li className='item'>
            <Link to='/about'>關於本站</Link>
          </li>
          <li className='item'>
            <a href='https://www.facebook.com/ukauitaigi/' target="_blank">FB</a>
          </li>
          <li className='item'>
            <a href='https://g0v-tw.slack.com/messages/itaigi/' target="_blank">Slack</a>
          </li>
          <li className='item'>
            <a href='http://moe.kktix.cc/' target="_blank">萌典松</a>
          </li>
          <li className='item'>
            <a href='http://g0v.tw/' target="_blank">g0v</a>
          </li>
          <li className='item'>
            <a href='https://g0v.hackpad.com/moed7ct-taigi-neologism' target="_blank">Hackpad</a>
          </li>
          <li className='item'>
            <a href='https://github.com/g0v/itaigi' target="_blank">GitHub</a>
          </li>
        </ul>
      </footer>
      <例句表 看例句={this.state.看例句} 關例句={this.關例句.bind(this, k)}
        漢字={han} 台羅={lo}
        />
    </div>
    );
  }
}

App.propTypes = {
  history: React.PropTypes.object,
  children: React.PropTypes.object,
};
