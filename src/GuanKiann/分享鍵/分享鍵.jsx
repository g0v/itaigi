import React from 'react';
import Debug from 'debug';
import { browserHistory } from 'react-router';
import './分享鍵.css';

var debug = Debug('itaigi:分享鍵');

export default class 分享鍵 extends React.Component {
  constructor(props) {
    super(props);
  }

  getCurrentLocation() {
    let routerPathname = browserHistory.getCurrentLocation().pathname;
    let { pathname } = this.props;

    pathname = pathname || routerPathname || '';

    if (pathname[0] === '/') {
      pathname = pathname.substr(1);
    }

    pathname = encodeURIComponent(decodeURIComponent(pathname));

    return pathname;
  }

  render() {
    let { size } = this.props;
    let pathname = this.getCurrentLocation();

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
          'href=https%3A%2F%2Fitaigi.tw%2F' + pathname +
          '&appId=590065061070994' +
          '&layout=button_count' +
          '&mobile_iframe=true' +
          '&size=' + size +
          '&width=' + width +
          '&height=' + height
        }
        width={width} height={height}
        style={{ border: 'none', overflow: 'hidden' }}
        scrolling="no" frameBorder="0"
        allowTransparency="true"></iframe>
    );
  }
}
