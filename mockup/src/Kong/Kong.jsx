
import React from 'react'
import Transmit from 'react-transmit'

class Kong extends React.Component {
  render () {
    return (
        <div className='Kong'></div>
      )
  }
}

export default Transmit.createContainer(Kong, { query: {} })
