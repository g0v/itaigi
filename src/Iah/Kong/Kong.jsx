
import React from 'react'
import Transmit from 'react-transmit'
import {Link} from 'react-router'
import Tshue from '../../GuanKiann/Tshue/Tshue'
import Su from '../../GuanKiann/Su/Su'
import ABo from '../../GuanKiann/ABo/ABo'
import TakKang from '../../GuanKiann/TakKang/TakKang'
import GuaGi from '../../GuanKiann/GuaGi/GuaGi'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'

var debug = Debug('itaigi:Kong')

class Kong extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.params === this.props.params) return
    this.props.setQueryParams(nextProps)
  }

  renderTshueSiann () {
    return (
        <div className='kong content'>
          <div className='ui segment'>
          <h3>欲找啥？</h3>
          </div>
        </div>
      )
  }

  renderTshoGoo () {
    return (
        <div className='kong content'>
          <div className='ui segment'>
          <h3>找「{this.props.kongData['關鍵字']}」錯了嗎？</h3>
          {this.props.kongData['內容']}
          <button className='ui button'>求講法</button>
          </div>
          <h3>我就是沒有人，我來講</h3>
          <ABo 華語關鍵字={this.props.kongData['關鍵字']}
            後端網址={this.props.後端網址}/>
        </div>
      )
  }

  renderKiatKo () {
    console.log(this.props.kongData['結果'])
    if (this.props.kongData['結果'] === 0) {
      return (
        <div className='tshueBo'>
          <div className='ui segment'>
            <h3>{this.props.kongData['關鍵字'] || '找什麼？'}</h3>
            <button className='ui button'>求講法</button>
          </div>
          <h3>我就是沒有人，我來講</h3>
          <ABo 華語關鍵字={this.props.kongData['關鍵字']}
            後端網址={this.props.後端網址}/>
        </div>
      )
    }
    return (
      <div className='kongHuat'>
        {this.props.kongData['內容']['列表'].map((g) => (
          <GuaGi id={g['外語項目編號']} key={g['外語項目編號']}
            後端網址={this.props.後端網址}></GuaGi>
        ))}
      <h3>啊無咧？</h3>
      <ABo 華語關鍵字={this.props.kongData['關鍵字']}
        後端網址={this.props.後端網址}/>
      </div>
    )
  }

  renderKianGi () {
    return (
      <div className='kianGi'>
        {this.props.kongData['內容']['其他建議'].map((g) => (
          <GuaGi id={g['外語項目編號']} key={g['外語項目編號']}
          後端網址={this.props.後端網址}></GuaGi>
        ))}
      </div>
    )
  }

  render () {
    debug('rendering %o', this.props.kongData)
    return (
        <div className='main container'>
          <nav className='navigation'>
            <Tshue
              defaultValue={this.props.params.k}
              handleSubmit={this.props.handleKong.bind(this)}
              {...this.props}/>
          </nav>
          <div className='kong content'>
            {this.props.kongData['結果'] >= 0 ? this.renderKiatKo()
            : this.props.kongData['結果'] === - 1 ? this.renderTshoGoo()
            : this.renderTshueSiann()}
            {this.props.kongData['結果'] >= 0 ? this.renderKianGi() : []}
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
    kongData ({params, 後端網址}) {
      if (params === undefined || params.k === undefined) {
        return Promise.resolve({
          '結果': -2,
          '訊息': '沒有提供關鍵字'
        })
      }
      return superagent.get(後端網址 + '平臺項目列表/揣列表?關鍵字=' + params.k)
        //.then(({body}) => body['列表'][0]['外語項目編號'])
        //.then((id) => superagent.get(後端網址 + '平臺項目/看對應內容?平臺項目編號=' + id))
        .then(({body}) => ({
          '關鍵字': params.k,
          '結果': body['列表'].length,
          '內容': body
        }))
        .catch((err) => ({
          '關鍵字': params.k,
          '結果': -1,
          '訊息': '發生錯誤',
          '內容': err
        }))
    }
  }
})
