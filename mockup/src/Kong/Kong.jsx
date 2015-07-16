
import React from 'react'
import Transmit from 'react-transmit'
import Router, {Link} from 'react-router'
import SearchBar from '../SearchBar/SearchBar'
import Su from '../Su/Su'

class Kong extends React.Component {
  render () {
    return (
        <div className='main container'>
          <nav className='navigation'></nav>
          <div className='kong'>
            <SearchBar
              handleSubmit={this.props.handleKong.bind(this)}
              {...this.props}/>
            <div className='ui su segment'>
              <div className='ui very relaxed list'>
                <Su></Su>
                <Su></Su>
              </div>
            </div>
          </div>
          <aside className='right column'>
            <div className='ui segment'>
              <Link to='lun' params={{k:'abc'}}>來討論</Link>
              <Link to='the' params={{k:'abc'}}>還不會</Link>
            </div>
          </aside>
        </div>
      )
  }
}

export default Transmit.createContainer(Kong, {})
