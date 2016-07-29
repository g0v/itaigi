import React from 'react';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import ABo from '../../GuanKiann/ABo/ABo';
import KiuKongHuat from '../../GuanKiann/KiuKongHuat/KiuKongHuat';
import Disqus from '../../Disqus/Disqus';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';
import Debug from 'debug';

var debug = Debug('itaigi:Kong無結果');

export default class 無結果 extends React.Component {
  render() {
    return (
      <div className='tshueBo'>
        <KiuKongHuat 華語關鍵字={this.props.華語關鍵字}
          後端網址={this.props.後端網址} csrftoken={this.props.csrftoken} />
        <h3 className='ui horizontal divider header'>
          <i className='cloud upload icon'></i>
          我會曉，會使按呢講
        </h3>
        <ABo 華語關鍵字={this.props.華語關鍵字}
          後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
          編號={this.props.編號} 漢字={this.props.漢字} 音標={this.props.音標}
        />
        <h3 className='ui horizontal divider header'>
          <i className='outline comments icon'></i>
          來討論
          「<span className='ui pink header'>{this.props.華語關鍵字}</span>」
        </h3>
        <Disqus pathname={this.props.pathname}/>
      </div>
    );
  }
}
