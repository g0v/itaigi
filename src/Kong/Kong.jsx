
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import SearchBar from '../SearchBar/SearchBar'
import Su from '../Su/Su'
import ABo from '../ABo/ABo'
import TakKang from '../TakKang/TakKang'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'

var debug = Debug('Kong')

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

    debug(this.props.kongData)
    var suList = this.props.kongData['新詞文本'] ? this.props.kongData['新詞文本'].map((d) => <Su suId={d['新詞文本項目編號']} suText={d['文本資料']} key={d['新詞文本項目編號']}/>) : []
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
    kongData ({params}) {
      if (params === undefined) {
        return Promise.resolve({})
      }
      return superagent.get('http://db.itaigi.tw/平臺項目列表/揣列表?關鍵字=' + params.k)
        .then(({body}) => body['列表'][0]['外語項目編號'])
        .then((id) => superagent.get('http://db.itaigi.tw/平臺項目/看對應內容?平臺項目編號=' + id))
        .then(({body}) => body)
    }
  }
})
