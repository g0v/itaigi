
import React from 'react'
import Transmit from 'react-transmit'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'

var debug = Debug('itaigi:LaiLik')

class LaiLik extends React.Component {
  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.params === this.props.params) return
    this.props.setQueryParams(nextProps)
  }

  render () {
    debug(this.props)
    return (
        <div className='content'>出處：{this.props.laiLikData['名']}</div>
      )
  }
}

export default Transmit.createContainer(LaiLik, {
  queries: {
    laiLikData ({laiLikId, 後端網址}) {
      if (!laiLikId) {
        return Promise.resolve({})
      }
      return superagent.get(後端網址 + '平臺項目來源/看內容?來源編號=' + laiLikId)
        .then((res) => res.body)
        .catch((err) => console.log(err))
    }
  }
})
