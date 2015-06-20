
import React from 'react'
import Transmit from 'react-transmit'

class Kong extends React.Component {
  render () {
    return (
        <div className='kong'>
          <h2 className='ui header'>這樣講</h2>
          <p>早幾點鐘解決，像這樣子鬧下去，孩子們得到指示，比較兒童時代，傳播到廣大空間去，和其哀情，地球也規矩地循著唯一的軌道，誰敢說是起於一時？</p>
        </div>
      )
  }
}

export default Transmit.createContainer(Kong, { query: {} })
