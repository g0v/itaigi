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
        <ul className='ui main menu'>
          <li className='item'>
            怎樣講
          </li>
          <li className='item'>來討論</li>
          <li className='item'>還不會</li>
          <li className='item'>好工具</li>
          <li className='item'>名人堂</li>
        </ul>
        <ul className='ui social menu'>
          <li className='item'>F</li>
          <li className='item'>G</li>
          <li className='item'>T</li>
          <li className='item'>R</li>
        </ul>
      </div>
      )
  }
}

export default Transmit.createContainer(AppBar, { query: {} })
