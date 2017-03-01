import React from 'react';
import Debug from 'debug';

var debug = Debug('itaigi:分享連結');

export default class 分享連結 extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    let { size, pathname } = this.props;

    pathname = pathname || '';

    let width = 92;
    let height = 20;
    if (size == 'large') {
      width = 110;
      height = 28;
    } else {
      size = 'small';
    }

    return (
      <a href={'https://www.facebook.com/dialog/share?' +
          'app_id=590065061070994' +
          '&display=popup' +
          '&href=http%3A%2F%2Fitaigi.tw%2F' + pathname +
          '&redirect_uri=http%3A%2F%2Fitaigi.tw%2F' + pathname}
          className="ui facebook button">
            <i className="facebook icon"></i> 分享
      </a>
    );
  }
}
