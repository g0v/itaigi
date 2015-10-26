
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import './ToLam.css'

class ToLam extends React.Component {
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
            <Link to='/k' params={{k: ''}}>怎樣講</Link>
          </li>
          <li className='item'><Link to='/l'>來討論</Link></li>
          <li className='item'><Link to='/t'>還不會</Link></li>
          <li className='item'><Link to='/iong'>好工具</Link></li>
          <li className='item'><Link to='/mia'>名人堂</Link></li>
        </ul>
        <ul className='ui social menu'>
          <li className='item'><a href="#">F</a></li>
          <li className='item'><a href="#">G</a></li>
          <li className='item'><a href="#">T</a></li>
          <li className='item'><a href="#">R</a></li>
        </ul>
        <div></div>
      </div>
      )
  }
}

export default Transmit.createContainer(ToLam, { query: {} })
