
import React from 'react'
import Transmit from 'react-transmit'
import Su from '../Su/Su'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'

var debug = Debug('itaigi:GuaGi')

class GuaGi extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.params === this.props.params) return
    this.props.setQueryParams(nextProps)
  }

  render () {
    debug(this.props.guaGiData)
    if (this.props.guaGiData['結果'] < 0) {
      return <div></div>
    }
    var suList = this.props.guaGiData['內容']['新詞文本'].map((d) =>
      <Su suId={d['新詞文本項目編號']}
        suText={d['文本資料']}
        key={d['新詞文本項目編號']}
        後端網址={this.props.後端網址}/>
    )
    return (
        <div className='guaGi'>
          <div className='ui su segment'>
            <div className='ui very relaxed list'>
              {suList}
            </div>
          </div>
        </div>
      )
  }
}

export default Transmit.createContainer(GuaGi, {
  queries: {
    guaGiData ({id, 後端網址}) {
      debug('抓外語資料 %s', id)
      if (id === undefined) {
        return Promise.resolve({
          '結果': -2,
          '訊息': '沒有提供 ID'
        })
      }
      return superagent.get(後端網址 + '平臺項目/看對應內容?平臺項目編號=' + id)
        .then((res) => ({
          id,
          '結果': 0,
          '內容': res.body
        }))
        .catch((err) => ({
          id,
          '結果': -1,
          '訊息': '發生錯誤',
          '內容': err
        }))
    }
  }
})
