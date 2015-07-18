
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import SearchBar from '../SearchBar/SearchBar'
import Su from '../Su/Su'
import ABo from '../ABo/ABo'
import TakKang from '../TakKang/TakKang'
import superagent from 'superagent-bluebird-promise'

class Kong extends React.Component {

  componentWillMount() { this.props.setQueryParams(this.props) }
  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return
    this.props.setQueryParams(nextProps)
  }
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

    const suList = this.props.suList.map((item) => <Su suData={item}/>)
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
                {suList}
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

export default Transmit.createContainer(Kong, {
  queries: {
    suList ({params}) {
      if (undefined === params) {
        return Promise.all([])
      }
      return superagent.get('http://127.0.0.1:8000/%E5%B9%B3%E8%87%BA%E9%A0%85%E7%9B%AE%E5%88%97%E8%A1%A8/%E6%8F%A3%E5%88%97%E8%A1%A8?%E9%97%9C%E9%8D%B5%E5%AD%97=' + params.k)
        .then((res) => Promise.all(res.body['列表'].map((d) => Su.getQuery('suData', {suId: +d['外語項目編號']}))) )
    }
  }
})
