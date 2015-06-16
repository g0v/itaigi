'use strict'

import React from 'react'
import Transmit from 'react-transmit'

class AppBar extends React.Component {
  render () {
    return (
      <div className='AppBar'>
        <div className='AppBar-logo'>i.taigi;</div>
      </div>
      )
  }
}

export default Transmit.createContainer(AppBar, { query: {} })
