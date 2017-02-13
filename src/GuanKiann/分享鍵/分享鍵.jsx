import React from 'react';
import './分享鍵.css';
import Debug from 'debug';

var debug = Debug('itaigi:分享鍵');

export default class 分享鍵 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { size } = this.props;
    let width = 92;
    let height = 20;
    if (size == 'large') {
      width = 110;
      height = 28;
    } else {
      size = 'small';
    }

    return (
      <iframe
        src={ 'https://www.facebook.com/plugins/share_button.php?' +
          'href=http%3A%2F%2Fitaigi.tw%2F' + this.props.pathname +
          '&layout=button_count&size=' + size + '&' +
          'mobile_iframe=true&appId=590065061070994&width=' + width + '&height=' + height
        }
        width={width} height={height}
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no" frameBorder="0"
        allowTransparency="true"></iframe>
    );
  }
}
