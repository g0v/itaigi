'use strict'

import React from 'react'
import Transmit from 'react-transmit'
import {RouteHandler} from 'react-router'
import Navigation from '../Navigation/Navigation'

import AppBar from '../AppBar/AppBar'

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
            <AppBar/>
          </header>
          <RouteHandler
            handleKong={this.kong.bind(this)}
            {...this.props}/>
          <footer className='app footer inverted'>
            <ul className='ui menu container inverted'>
              <li className='item'><a href='https://g0v.hackpad.com/moed7ct-taigi-neologism'>Hackpad</a></li>
              <li className='item'>授權條款</li>
              <li className='item'><a href='https://g0v.tw/'>g0v</a></li>
              <li className='item'><a href='https://github.com/g0v/itaigi'>GitHub</a></li>
            </ul>
          </footer>
        </div>
      )
  }
}
App = Navigation(App)

export default Transmit.createContainer(App, { queries: {} })
