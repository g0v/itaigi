
import React from 'react'
import Transmit from 'react-transmit'

class TakKang extends React.Component {
  render () {
    return (
        <div className='takkang ui segment'>
          台語每日一句或一段：文字圖+聲音檔
        </div>
      )
  }
}

export default Transmit.createContainer(TakKang, { queries: {} })
