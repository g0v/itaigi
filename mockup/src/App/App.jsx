'use strict'

import React from 'react'
import Transmit from 'react-transmit'
import {RouteHandler} from 'react-router'
import Navigation from '../Navigation/Navigation'

import AppBar from '../AppBar/AppBar'
import SearchBar from '../SearchBar/SearchBar'

import './App.css'

class App extends React.Component {

  kong (k) {
    this.props.routerNavigation.transitionTo('kong', {k})
  }

  render () {
    return (
        <div className='app background'>

          <header className='app header'>
            <AppBar/>
            <SearchBar
              handleSubmit={this.kong.bind(this)}
              {...this.props}/>
          </header>

          <div className='main container'>
            <div className='main content'>
              <RouteHandler {...this.props}/>
            </div>

            <aside className='right column'>
              <div className='ui segment'>
                來討論<br/>
                還不會
              </div>
            </aside>
          </div>

          <footer>
          </footer>

        </div>
      )
  }
}
App = Navigation(App)

export default Transmit.createContainer(App, { queries: {} })
