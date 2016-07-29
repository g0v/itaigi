import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import ABo from '../../GuanKiann/ABo/ABo';
import KiuKongHuat from '../../GuanKiann/KiuKongHuat/KiuKongHuat';
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import Disqus from '../../Disqus/Disqus';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:分享鍵');

class 分享鍵 extends React.Component {
  render() {
    debug('rendering %o', this.props.kongData);
    return (
    <div className='container'>
      <span>哇！原來「{ this.props.華語關鍵字 }」是這樣子講的！快分享給你的朋友知道吧</span>
      <iframe
        src={ 'https://www.facebook.com/plugins/share_button.php?' +
          'href=http%3A%2F%2Fitaigi.tw%2F' + this.props.pathname +
          '&layout=button_count&size=small&mobile_iframe=true&appId=590065061070994&width=72&height=20'
      }
        width="72" height="20"
        style={{ border: 'none', overflow: 'hidden' }} scrolling="no" frameborder="0" allowTransparency="true"></iframe>
    </div>
    );
  }
}
export default Transmit.createContainer(分享鍵, {
});
