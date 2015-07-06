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
    this.state = {
      ui: {}
    }
  }

  kong (k) {
    this.props.routerNavigation.transitionTo('kong', {k})
  }

  nav (nav) {
    this.setState({ ui: {nav} })
  }

  column (column) {
    this.setState({ ui: {column} })
  }

  render () {
    return (
        <div className='app background'>

          <header className='app header'>
            <AppBar/>
          </header>

          <div className='main container'>
            <nav className='navigation'>{this.state.ui.nav}</nav>
            <div className='main content'>
              <RouteHandler
                handleKong={this.kong.bind(this)}
                handleUINav={this.nav.bind(this)}
                handleUIColumn={this.column.bind(this)}
                {...this.props}/>
            </div>

            <aside className='right column'>
              {this.state.ui.column}
            </aside>
          </div>

          <footer className='app footer inverted'>
            <ul className='ui menu container inverted'>
              <li className='item'>授權條款</li>
              <li className='item'>g0v</li>
              <li className='item'>關於本計劃</li>
            </ul>
          </footer>

        </div>
      )
  }
}
App = Navigation(App)

export default Transmit.createContainer(App, { queries: {} })
