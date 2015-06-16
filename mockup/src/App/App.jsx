'use strict'

import React from 'react'
import Transmit from 'react-transmit'
import {RouteHandler} from 'react-router'

import AppBar from '../AppBar/AppBar'
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {
  query (evt) {
    console.log(evt)
  }

  render () {
    return (
        <div className='App'>
          <AppBar/>
          <SearchBar
            onSubmit={this.query.bind(this)}
            {...this.props}/>
          <RouteHandler/>
        </div>
      )
  }
}

export default Transmit.createContainer(App, { queries: {} })
