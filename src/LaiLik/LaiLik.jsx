
import React from 'react'
import Transmit from 'react-transmit'
import superagent from 'superagent-bluebird-promise'
import Debug from 'debug'

var debug = Debug('itaigi:LaiLik')

class LaiLik extends React.Component {
  static propTypes = {
    laiLikData: React.PropTypes.instanceOf(Object).isRequired
  }

  componentWillMount() { this.props.setQueryParams(this.props) }

  render () {
    debug(this.props.laiLikData)
    return (
        <div className='content'>出處：{this.props.laiLikData['名']}</div>
      )
  }
}

export default Transmit.createContainer(LaiLik, {
  queryParams: {
    laiLikId: undefined
  },
  queries: {
    laiLikData ({laiLikId}) {
      if (laiLikId === undefined) {
        return Promise.resolve({})
      }
      return superagent.get('http://db.itaigi.tw/平臺項目來源/看內容?來源編號=' + laiLikId)
        .then((res) => res.body)
    }
  }
})
