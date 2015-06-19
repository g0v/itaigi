
import React from 'react'
import Transmit from 'react-transmit'

class Kong extends React.Component {
  render () {
    return (
        <div className='kong container'>
          <h2 className='ui header'>這樣講</h2>
        </div>
      )
  }
}

export default Transmit.createContainer(Kong, { query: {} })
