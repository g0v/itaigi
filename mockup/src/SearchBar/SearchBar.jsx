'use strict'

import React from 'react'
import Transmit from 'react-transmit'

class SearchBar extends React.Component {
  render () {
    return (
        <div className='SearchBar'>
          <input type='text'
            placeholder='A... 怎麼講'
            value={this.props.q}
            />
          <button className='SearchBar-submit'>找</button>
        </div>
      )
  }
}

export default Transmit.createContainer(SearchBar, { query: {} })
