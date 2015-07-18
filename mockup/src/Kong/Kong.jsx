
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

    const kongData = {
      "新詞影音": [ ],
      "外語語言": "華語",
      "外語資料": "一點點",
      "新詞文本": [
        {
          "新詞文本項目編號": "13742",
          "文本資料": "一屑仔"
        },
        {
          "新詞文本項目編號": "13743",
          "文本資料": "一寡仔"
        },
        {
          "新詞文本項目編號": "13744",
          "文本資料": "一點仔"
        },
        {
          "新詞文本項目編號": "13745",
          "文本資料": "厘"
        },
        {
          "新詞文本項目編號": "13746",
          "文本資料": "淡薄仔"
        },
        {
          "新詞文本項目編號": "13747",
          "文本資料": "微微仔"
        }
      ],
      "外語項目編號": "191"
    }

    const suList = kongData['新詞文本'].map((d) => <Su suId={d['新詞文本項目編號']} suText={d['文本資料']}/>)
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
  }
})
