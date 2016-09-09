import React from 'react';
import { Link } from 'react-router';
import FBTest from '../../FBTest/FBTest';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';
import Debug from 'debug';

var debug = Debug('itaigi:Kong無關鍵字');

export default class 無關鍵字 extends React.Component {
  render() {
    let hot = ['寶可夢', '討厭', '水母', '手腳不乾淨', '煩'];
    return (
      <div className='kong content'>
        <div className='分享'>
          <span>大家來學台語，大家做伙來豐富台語！快分享 iTaigi 給你的朋友知道吧！</span>
          <分享鍵 pathname={ '' }/>
        </div>
        <div className='ui inverted segment'>
          <span className='header large'>熱門詞：</span>
          {
            hot.map(function (su, i) {
              return (
                <Link
                  className='ui inverted button basic teal large'
                  style={{ marginBottom: '0.25em' }}
                  to={'/k/' + su}>
                  {su}
                </Link>
              );
            }
          )}
        </div>
        <FBTest/>
      </div>
    );
  }
}
