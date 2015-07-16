
import React from 'react'
import Transmit from 'react-transmit'

class ABo extends React.Component {
  render () {
    return (
        <div className='ui segment'>
          <div className='abo ui action input'>
            我要提供講法
          </div>
        </div>
      )
  }
}

export default Transmit.createContainer(ABo, { queries: {} })
