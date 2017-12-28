import React from 'react';
import Debug from 'debug';
import { browserHistory } from 'react-router';

var debug = Debug('itaigi:複製連結鍵');

export default class 複製連結鍵 extends React.Component {
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

  handleClick() {
    var textField = document.createElement('textarea');
    textField.innerText = decodeURIComponent(window.location.href);
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert('連結已複製，趕緊轉貼分享吧！');
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
      <i onClick={this.handleClick} className='external icon'></i>
    );
  }
}
