import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import ABo from '../../GuanKiann/ABo/ABo';
import KiuKongHuat from '../../GuanKiann/KiuKongHuat/KiuKongHuat';
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import Disqus from '../../Disqus/Disqus';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵'
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:Kong其他建議');

export default class 其他建議 extends React.Component {
  render() {
    return (
      <div className='kianGi'>
        <h3 className='ui horizontal divider header'>
          <i className='book icon'></i>
          相關的詞
        </h3>
        {this.props.內容.其他建議.map((g) =>
          <GuaGi id={g.外語項目編號}
            key={g.外語項目編號} 新詞文本={g.新詞文本}
            後端網址={this.props.後端網址}/>
        )}
      </div>
    );
  }
}
