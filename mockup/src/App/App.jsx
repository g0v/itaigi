'use strict'

import React from 'react'
import Transmit from 'react-transmit'
import {RouteHandler} from 'react-router'

import AppBar from '../AppBar/AppBar'
import SearchBar from '../SearchBar/SearchBar'

class App extends React.Component {
  query (q) {
    this.setState({q})
  }

  render () {
    return (
        <div className='App'>
          <AppBar/>
          <SearchBar
            onSubmit={this.query.bind(this)}
            {...this.props}/>
          <RouteHandler {...this.state} {...this.props}/>
        </div>
      )
  }
}

export default Transmit.createContainer(App, { queries: {} })
