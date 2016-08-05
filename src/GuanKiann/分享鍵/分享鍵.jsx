import React from 'react';
import './分享鍵.css';
import Debug from 'debug';

var debug = Debug('itaigi:分享鍵');

export default class 分享鍵 extends React.Component {
  render() {
    return (
      <iframe
        src={ 'https://www.facebook.com/plugins/share_button.php?' +
          'href=http%3A%2F%2Fitaigi.tw%2F' + this.props.pathname +
          '&layout=button_count&size=small&' +
          'mobile_iframe=true&appId=590065061070994&width=72&height=20'
        }
        width="72" height="20"
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no" frameBorder="0"
        allowTransparency="true"></iframe>
    );
  }
}
