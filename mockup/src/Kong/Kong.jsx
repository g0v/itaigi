
import React from 'react'
import Transmit from 'react-transmit'
import Su from '../Su/Su'

class Kong extends React.Component {
  render () {
    return (
        <div className='kong'>
          <h2 className='ui header'>這樣講</h2>
          <div className='ui su segment'>
            <div className='ui very relaxed list'>
              <Su></Su>
              <Su></Su>
            </div>
          </div>
        </div>
      )
  }
}

export default Transmit.createContainer(Kong, { query: {} })
