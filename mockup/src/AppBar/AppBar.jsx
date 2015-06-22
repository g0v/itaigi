'use strict'

import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import './AppBar.css'

class AppBar extends React.Component {
  render () {
    return (
      <div className='app bar container'>
        <h1 className='title segment'>
          <Link to='app'>
            <i className='logo'>
              <u>i taigi</u>
            </i>
          </Link>
        </h1>
        <div className='ui social menu segment'>
          <ul>
            <li className='item'>F</li>
            <li className='item'>G</li>
            <li className='item'>T</li>
          </ul>
        </div>
      </div>
      )
  }
}

export default Transmit.createContainer(AppBar, { query: {} })
