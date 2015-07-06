
import React from 'react'
import Transmit from 'react-transmit'
import SearchBar from '../SearchBar/SearchBar'
import Su from '../Su/Su'

class Kong extends React.Component {
  componentWillMount () {
    this.props.handleUIColumn(<div className='ui segment'>
          來討論<br/>
          還不會
        </div>)
  }

  render () {
    return (
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
      )
  }
}

export default Transmit.createContainer(Kong, {})
