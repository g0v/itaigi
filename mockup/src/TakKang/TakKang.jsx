
import React from 'react'
import Transmit from 'react-transmit'

class TakKang extends React.Component {
  render () {
    return (
        <div className='takkang ui segment'>
          tak-kang
        </div>
      )
  }
}

export default Transmit.createContainer(TakKang, { queries: {} })
