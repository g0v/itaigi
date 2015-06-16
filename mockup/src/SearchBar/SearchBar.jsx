'use strict'

import React from 'react'
import Transmit from 'react-transmit'

class SearchBar extends React.Component {
  state = {
    q: this.props.q || ''
  }

  keyPress (evt) {
    console.log(evt.key)
    var q = this.state.q + evt.key
    this.setState({q})
  }

  render () {
    return (
        <div className='SearchBar'>
          <input type='text'
            placeholder='A... 怎麼講'
            value={this.state.q}
            onKeyPress={this.keyPress.bind(this)}/>
          <button className='SearchBar-submit'
            onSubmit={this.props.onSubmit}>找</button>
        </div>
      )
  }
}

export default Transmit.createContainer(SearchBar, { query: {} })
