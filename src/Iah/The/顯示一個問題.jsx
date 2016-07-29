import React from 'react';
import ABo from '../../GuanKiann/ABo/ABo';
import Disqus from '../../Disqus/Disqus';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';

export default class 顯示一個問題 extends React.Component {

  render() {
    return (
      <div className='main container'>
        <div className='the content'>
          <分享鍵 pathname={this.props.pathname} 華語關鍵字={this.props.華語關鍵字} />
          <div className='ui forum segment'>
            <h3 className='ui header'>
              <i className='cloud upload icon'></i>
              我會曉，「{this.props.華語關鍵字}」會使按呢講
            </h3>
            <ABo 華語關鍵字={this.props.華語關鍵字}
              後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
              編號={this.props.編號} 漢字={this.props.漢字} 音標={this.props.音標}
            />
          </div>
          <Disqus pathname={this.props.pathname}/>
        </div>
      </div>
    );
  }
}
