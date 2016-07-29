import React from 'react';
import { Link } from 'react-router';
import Disqus from '../../Disqus/Disqus';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';
import Debug from 'debug';

var debug = Debug('itaigi:Kong無關鍵字');

export default class 無關鍵字 extends React.Component {
  render() {
    let hot = ['寶可夢', '討厭', '水母', '手腳不乾淨', '煩'];
    return (
      <div className='kong content'>
        <div className='ui inverted segment'>
          <span className='header large'>熱門詞：</span>
          {
            hot.map(function (su, i) {
              return (
                <Link
                  className='ui inverted button basic teal large'
                  to={'/k/' + su}>
                  {su}
                </Link>
              );
            }
          )}
        </div>
      </div>
    );
  }
}
