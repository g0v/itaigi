
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
      return superagent.get('http://db.itaigi.tw/%E5%B9%B3%E8%87%BA%E9%A0%85%E7%9B%AE%E4%BE%86%E6%BA%90/%E7%9C%8B%E5%85%A7%E5%AE%B9?%E4%BE%86%E6%BA%90%E7%B7%A8%E8%99%9F=' + laiLikId)
        .then((res) => res.body)
    }
  }
})
