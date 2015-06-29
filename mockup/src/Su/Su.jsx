
import React from 'react'

export default class Tzi extends React.Component {
  render () {
    return (
        <div className='su item'>
          <div className='content'>
            <a className='header'>䖳</a>
            <div className='content'>水母、海蜇皮</div>
            <div className='list'>
              <div className='item'>
                <i className='right triangle icon'></i>
                <div className='content'>出處：臺灣閩南語常用詞辭典</div>
              </div>
              <div className='item'>
                <i className='right triangle icon'></i>
                <div className='content'>評價：124 人說好 / 2 人說不好</div>
              </div>
              <ul className='ui secondary menu'>
                <li className='item'><i className='thumbs outline up icon'></i>按呢講好</li>
                <li className='item'><i className='thumbs outline down icon'></i>按呢無好</li>
                <li className='item'><i className='comments outline icon'></i>討論 (6)</li>
              </ul>
            </div>
          </div>
        </div>
      )
  }
}
