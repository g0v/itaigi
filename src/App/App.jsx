'use strict'

import React from 'react'
import Transmit from 'react-transmit'
import {RouteHandler} from 'react-router'
import Navigation from '../Navigation/Navigation'

import ToLam from '../GuanKiann/ToLam/ToLam'

import './App.css'

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
App = Navigation(App)

export default Transmit.createContainer(App, { queries: {} })
