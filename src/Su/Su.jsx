
import React from 'react'
import Transmit from 'react-transmit'
import LaiLik from '../LaiLik/LaiLik'
import superagent from 'superagent-bluebird-promise'

class Su extends React.Component {
  componentWillMount () { this.props.setQueryParams(this.props) }
  render () {

    //const suId = 192
    //const suText = '一屑仔'
    //const suData = {
      //"收錄者": "1",
      //"著作所在地": "臺灣",
      //"語言腔口": "閩南語",
      //"種類": "字詞",
      //"版權": "會使公開",
      //"來源": "2",
      //"推薦用字": "否",
      //"著作年": "2014",
      //"屬性內容":
      //{
        //"音標": "tsi̍t-sut-á"
      //},
      //"收錄時間": "2015-07-18 14:27:11"
    //}

    const suId = this.props.suId
    const suText = this.props.suText
    const suData = this.props.suData

    return (
        <div className='su item'>
          <div className='content'>
            <a className='header'>{suText}</a>
            <div className='content'>{suData['屬性內容'] ? suData['屬性內容']['音標'] : ''}</div>
            <div className='list'>
              <div className='item'>
                <i className='right triangle icon'></i>
                <LaiLik laiLikId={suData['來源']}/>
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
    suData ({suId}) {
      if (! suId) {
        return Promise.all([])
      }
      console.log(suId)
      return superagent.get('http://db.itaigi.tw/%E5%B9%B3%E8%87%BA%E9%A0%85%E7%9B%AE/%E7%9C%8B%E8%A9%B3%E7%B4%B0%E5%85%A7%E5%AE%B9?%E5%B9%B3%E8%87%BA%E9%A0%85%E7%9B%AE%E7%B7%A8%E8%99%9F=' + suId)
        .then((res) => res.body, (err) => console.log(err))
    }
  }
})
