
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import SearchBar from '../SearchBar/SearchBar'
import Su from '../Su/Su'
import ABo from '../ABo/ABo'
import TakKang from '../TakKang/TakKang'

class Kong extends React.Component {
  render () {
    if (! this.props.params.k) {
      return (
          <div className='main container'>
            <nav className='navigation'>
              <SearchBar
                defaultValue={this.props.params.k}
                handleSubmit={this.props.handleKong.bind(this)}
                {...this.props}/>
            </nav>
            <div className='content'>
              <TakKang/>
            </div>
          </div>
        )
    }
    if (this.props.params.k === '沒有人') {
      return (
          <div className='main container'>
            <nav className='navigation'>
              <SearchBar
                defaultValue={this.props.params.k}
                handleSubmit={this.props.handleKong.bind(this)}
                {...this.props}/>
            </nav>
          <div className='kong content'>
            <div className='ui segment'>
            <h3>沒有人</h3>
            <button className='ui button'>求講法</button>
            </div>
            <h3>我就是沒有人，我來講</h3>
            <ABo/>
          </div>
          <aside className='right column'>
            <div className='ui segment'>
              <Link to='lun' params={{k: this.props.params.k}}>來討論</Link>
            </div>
          </aside>
        </div>
      )
    }
    return (
        <div className='main container'>
          <nav className='navigation'>
            <SearchBar
              defaultValue={this.props.params.k}
              handleSubmit={this.props.handleKong.bind(this)}
              {...this.props}/>
          </nav>
          <div className='kong content'>
            <div className='ui su segment'>
              <div className='ui very relaxed list'>
                <Su></Su>
                <Su></Su>
              </div>
            </div>
            <h3>啊無咧？</h3>
            <ABo/>
          </div>
          <aside className='right column'>
            <div className='ui segment'>
              <Link to='lun' params={{k: this.props.params.k}}>來討論</Link>
            </div>
          </aside>
        </div>
      )
  }
}

export default Transmit.createContainer(Kong, {})
