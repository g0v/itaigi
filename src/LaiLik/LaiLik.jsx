
import React from 'react'
import Transmit from 'react-transmit'
import superagent from 'superagent-bluebird-promise'

class LaiLik extends React.Component {
  componentWillMount() { this.props.setQueryParams(this.props) }
  render () {
    //const laiLikId = 43
    //const laiLikData = {
      //"名": "臺灣閩南語常用詞辭典",
      //"屬性內容": {
        //"單位": "中華民國教育部"
      //}
    //}
    const laiLikId = this.props.laiLikId
    const laiLikData = this.props.laiLikData
    return (
        <div className='content'>出處：{laiLikData['名']}</div>
      )
  }
}

export default Transmit.createContainer(LaiLik, {
  queries: {
    laiLikData ({laiLikId}) {
      if (! laiLikId) {
        return Promise.all([])
      }
      return superagent.get('http://db.itaigi.tw/平臺項目來源/看內容?來源編號=' + laiLikId)
        .then((res) => res.body)
    }
  }
})
