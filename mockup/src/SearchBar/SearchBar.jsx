'use strict'

import React from 'react'
import Transmit from 'react-transmit'

class SearchBar extends React.Component {
  state = {
    q: this.props.q || ''
  }

  handleKeyDown (evt) {
    if (evt.keyCode === 13) {
      this.handleSubmit(evt)
      return
    }
  }

  handleKeyUp (evt) {
    var q = evt.target.value
    this.setState({q})
  }

  handleSubmit (evt) {
    this.props.onSubmit(this.state.q)
  }

  render () {
    return (
        <div className='SearchBar'>
          <input type='text'
            placeholder='A... 怎麼講'
            onKeyDown={this.handleKeyDown.bind(this)}
            onKeyUp={this.handleKeyUp.bind(this)}/>
          <button className='SearchBar-submit'
            onClick={this.handleSubmit.bind(this)}>找</button>
        </div>
      )
  }
}

export default Transmit.createContainer(SearchBar, { query: {} })
