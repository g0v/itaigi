'use strict'

import React from 'react'
import Transmit from 'react-transmit'
import {RouteHandler} from 'react-router'
import Navigation from '../Navigation/Navigation'

import AppBar from '../AppBar/AppBar'
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {

  kong (k) {
    this.props.routerNavigation.transitionTo('kong', {k})
  }

  render () {
    return (
        <div className='app container'>
          <AppBar/>
          <SearchBar
            handleSubmit={this.kong.bind(this)}
            {...this.props}/>
          <RouteHandler {...this.props}/>
        </div>
      )
  }
}
App = Navigation(App)

export default Transmit.createContainer(App, { queries: {} })
