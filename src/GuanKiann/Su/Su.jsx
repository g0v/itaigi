import React from 'react';
import Transmit from 'react-transmit';
import LaiLik from '../LaiLik/LaiLik';
import HuatIm from '../HuatIm/HuatIm';
import TuiIngHuaGi from './TuiIngHuaGi';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:Su');

class Su extends React.Component {

  componentWillMount() { this.props.setQueryParams(this.props); }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
  }

  render() {
    const { suText, suIm, suData, 後端網址 } = this.props;
    debug(this.props);
    if (suData.結果 == -2) {
      return <div className='su item'></div>;
    }
    let 按呢講的外語=this.props.按呢講的外語列表.map((外語)=>(<TuiIngHuaGi key={外語.外語項目編號} 外語={外語}/>))
    return (
    <div className='su card'>
      <div className='content'>
        <div className='left floated'>
          <div className='header green'>
          {suText}
          </div>
          <div className='meta'>
            {suIm}
          </div>
        </div>
          <HuatIm suData={suData} />
        <div className='description'>
            <LaiLik laiLikId={suData.來源} 後端網址={後端網址} />
            對應華語詞：{按呢講的外語}
        </div>
        <ul>
          <li className='item'>
            <i className='thumbs outline up icon'></i>按呢講好 (124)
          </li>
          <li className='item'>
            <i className='thumbs outline down icon'></i>按呢無好 (2)
          </li>
          <li className='item'>
            <i className='comments outline icon'></i>討論 (6)
          </li>
        </ul>
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(Su, {
  queries: {
    suData({ suId, 後端網址 }) {
      if (!suId) {
        return Promise.resolve({
          '結果': -2,
        });
      }

      return superagent.get(後端網址 + '平臺項目/看詳細內容?平臺項目編號=' + suId)
        .then((res) => Object.assign({
            '結果': 0,
          }, res.body))
        .catch((err) => console.log(err));
    },
    按呢講的外語列表({ suText, 後端網址 }) {
      if (!suText) {
        return Promise.resolve({
          '結果': -2,
        });
      }
      return superagent.get(後端網址 + '平臺項目列表/揣按呢講列表?關鍵字=' + suText)
        .then(({body}) => body.列表)
        .catch((err) => console.log(err));
    },
  },
});
