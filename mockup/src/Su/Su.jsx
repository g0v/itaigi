
import React from 'react'
import Transmit from 'react-transmit'

import superagent from 'superagent-bluebird-promise'

class Su extends React.Component {
  render () {
    //const data = {
      //"新詞文本": [
        //{
          //"文本資料": "落空逝",
          //"新詞文本項目編號": "8161"
        //}
      //],
      //"外語資料": "白走一趟",
      //"外語項目編號": "8160",
      //"外語語言": "華語",
      //"新詞影音": [ ]
    //}
    const suData = this.props.suData
    return (
        <div className='su item'>
          <div className='content'>
            <a className='header'>{suData['新詞文本'][0]['文本資料']}</a>
            <div className='content'>{suData['外語資料']}</div>
            <div className='list'>
              <div className='item'>
                <i className='right triangle icon'></i>
                <div className='content'>出處：XXX</div>
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
  queryParams: {
    suId: 8160
  },
  queries: {
    suData (queryParams) {
      return superagent.get('http://127.0.0.1:8000/%E5%B9%B3%E8%87%BA%E9%A0%85%E7%9B%AE/%E7%9C%8B%E5%B0%8D%E6%87%89%E5%85%A7%E5%AE%B9?%E5%B9%B3%E8%87%BA%E9%A0%85%E7%9B%AE%E7%B7%A8%E8%99%9F=' + queryParams.suId)
        .then((res) => res.body, (err) => console.log(err))
    }
  }
})
