'use strict'

import React from 'react'
import Transmit from 'react-transmit'
import Router, {RouteHandler} from 'react-router'

import ToLam from '../GuanKiann/ToLam/ToLam'

import './App.css'

var Navigation = Component => React.createClass({
  mixins: [ Router.Navigation ],

  routerWillEnter(router, nextState, route) {
    if (this.refs.component && this.refs.component.routerWillEnter) {
      this.refs.component.routerWillEnter(router, nextState, route);
    }
  },

  routerWillLeave(router, nextState, route) {
    if (this.refs.component && this.refs.component.routerWillLeave) {
      this.refs.component.routerWillLeave(router, nextState, route);
    }
  },

  render() {
    var navigationMixinApi = {
      transitionTo : this.transitionTo,
      replaceWith  : this.replaceWith,
      goBack       : this.goBack,
      makePath     : this.makePath,
      makeHref     : this.makeHref,
    };

    return <Component ref="component" {...this.props} {...navigationMixinApi} routerNavigation={navigationMixinApi} />;
  }
})

class App extends React.Component {

  constructor () {
    super()
  }

  kong (k) {
    this.props.routerNavigation.transitionTo('kong', {k})
  }

  render () {
    return (
        <div className='app background'>
          <header className='app header'>
            <ToLam/>
          </header>
          <RouteHandler
            handleKong={this.kong.bind(this)}
            {...this.props}/>
          <footer className='app footer inverted'>
            <ul className='ui menu container inverted'>
              <li className='item'><a href='https://g0v.hackpad.com/moed7ct-taigi-neologism'>Hackpad</a></li>
              <li className='item'>授權條款</li>
              <li className='item'><a href='https://g0v.tw/'>g0v</a></li>
              <li className='item'><a href='https://github.com/g0v/taigi-neologism'>GitHub</a></li>
            </ul>
          </footer>
        </div>
      )
  }
}

export default Transmit.createContainer(Navigation(App), { queries: {} })
