
import React from 'react'
import Transmit from 'react-transmit'
import Tshue from '../GuanKiann/Tshue/Tshue'
import TakKang from '../GuanKiann/TakKang/TakKang'
import Debug from 'debug'

var debug = Debug('itaigi:Home')

class Home extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.params === this.props.params) return
    this.props.setQueryParams(nextProps)
  }

  render () {
    return (
      <div className='main container'>
        <nav className='navigation'>
          <Tshue
            handleSubmit={this.props.handleKong.bind(this)}
            {...this.props}/>
        </nav>
        <div className='content'>
          <TakKang/>
        </div>
      </div>
      )
  }
}

export default Transmit.createContainer(Home, { queries: {} })
