import React from 'react';
import ABo from '../../GuanKiann/ABo/ABo';
import Disqus from '../../Disqus/Disqus';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';

export default class 顯示一個問題 extends React.Component {

  render() {
    let 對應講法網址 = 'k%2F' + this.props.華語關鍵字;
    return (
      <div className='main container'>
        <div className='the content'>
          <div className='分享'>
            <span>「{ this.props.華語關鍵字 }」的台語要怎麼說呢？來考考你的朋友吧！</span>
            <分享鍵 pathname={對應講法網址}/>
          </div>
          <div className='ui forum segment'>
            <h3 className='ui header'>
              <i className='cloud upload icon'></i>
              我會曉，「{this.props.華語關鍵字}」會使按呢講
            </h3>
            <ABo 華語關鍵字={this.props.華語關鍵字}
              csrftoken={this.props.csrftoken}
              編號={this.props.編號} 漢字={this.props.漢字} 音標={this.props.音標}
            />
          </div>
          <Disqus pathname={對應講法網址}/>
        </div>
      </div>
    );
  }
}
