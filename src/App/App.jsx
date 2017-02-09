import React from 'react';
import ToLam from '../GuanKiann/ToLam/ToLam';
import IapKha from '../GuanKiann/IapKha/IapKha';
import 後端 from './後端';

import './App.css';

import Transmit from 'react-transmit';
import { Promise } from 'bluebird';
import { browserHistory } from 'react-router';
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
    browserHistory.replace('/k/' + 外語);
  }

  欲提供講法(外語) {
    browserHistory.replace('/t/' + 外語);
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
            查怎樣講: this.查怎樣講.bind(this),
            欲提供講法: this.欲提供講法.bind(this),
            後端網址: 後端.網址(), csrftoken: this.state.csrftoken, 編號: this.state.編號,
          }
        )}
      <IapKha/>
    </div>
    );
  }
}

App.propTypes = {
  history: React.PropTypes.object,
  children: React.PropTypes.object,
};
