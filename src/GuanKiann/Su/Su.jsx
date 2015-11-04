
import React from 'react'
import Transmit from 'react-transmit'
import LaiLik from '../LaiLik/LaiLik'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'

var debug = Debug('itaigi:Su')

class Su extends React.Component {

  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.params === this.props.params) return
    this.props.setQueryParams(nextProps)
  }

  render () {
    const {suText, suData, 後端網址} = this.props
    debug(this.props)
    if (suData['結果'] == -2) {
      return <div className='su item'></div>
    }
    return (
        <div className='su item'>
          <div className='content'>
            <a className='header'>{suText}</a>
            <div className='content'>{suData['屬性內容'] ? suData['屬性內容']['音標'] : ''}</div>
            <div className='list'>
              <div className='item'>
                <i className='right triangle icon'></i>
                <LaiLik laiLikId={suData['來源']} 後端網址={後端網址}/>
              </div>
            </div>
            <ul className='ui secondary menu'>
              <li className='item'><i className='thumbs outline up icon'></i>按呢講好 (124)</li>
              <li className='item'><i className='thumbs outline down icon'></i>按呢無好 (2)</li>
              <li className='item'><i className='comments outline icon'></i>討論 (6)</li>
            </ul>
          </div>
        </div>
      )
  }
}

export default Transmit.createContainer(Su, {
  queries: {
    suData ({suId, 後端網址}) {
      if (!suId) {
        return Promise.resolve({
          '結果': -2
        })
      }
      return superagent.get(後端網址 + '平臺項目/看詳細內容?平臺項目編號=' + suId)
        .then((res) => Object.assign({
          '結果': 0
        }, res.body))
        .catch((err) => console.log(err))
    }
  }
})
