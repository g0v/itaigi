'use strict'

import React from 'react'
import Transmit from 'react-transmit'

class AppBar extends React.Component {
  render () {
    return (
      <div className='ui app bar'>
        <h1 className='ui app header'>i.taigi</h1>
        <div className='ui logo shape'>i.taigi;</div>
        <div className='ui social menu'>social networks</div>
      </div>
      )
  }
}

export default Transmit.createContainer(AppBar, { query: {} })
