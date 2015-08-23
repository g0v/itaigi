
import React from 'react'
import Transmit from 'react-transmit'

class ABo extends React.Component {
  render () {
    return (
        <div className='ui segment'>
          <div className='abo ui input'>
            <input placeholder='漢字' type='text'/>
          </div>
          <div className='abo ui input'>
            <input placeholder='台羅音標' type='text'/>
          </div>
          <div className='abo ui input'>
            <input placeholder='提供者' type='text'/>
          </div>
          <button className='ui button'>送出</button>
        </div>
      )
  }
}

export default Transmit.createContainer(ABo, { queries: {} })
