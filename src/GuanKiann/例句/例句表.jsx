import React from 'react';
import Modal from 'react-modal';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
import Debug from 'debug';
import { browserHistory } from 'react-router';
import 後端 from '../../後端';
import HuatIm from '../HuatIm/HuatIm';
import TuiIngHuaGi from '../Su/TuiIngHuaGi';
import 顯示例句一句 from './顯示例句一句';
import 無例句 from './無例句';
import 分享鍵 from '../分享鍵/分享鍵';
import 複製連結鍵 from '../複製連結鍵/複製連結鍵';
import 留言板 from '../../GuanKiann/留言板/留言板';

var superagent = require('superagent-promise')(require('superagent'), Promise);

var debug = Debug('itaigi:例句表');

class 例句表 extends React.Component {
  按呢講的外語() {
    if (!this.props.按呢講的外語列表) {
      return null;
    }

    return this.props.按呢講的外語列表.map((外語, i) => (
        <TuiIngHuaGi key={i} 外語={外語}/>
      ));
  }

  例句() {
    if (!this.props.例句列表) {
      return <div>載入中，小等一下...</div>;
    }

    if (this.props.例句列表.length === 0) {
      return <無例句/>;
    }

    return this.props.例句列表.map((例句, i) => (
        <顯示例句一句 key={i} 第幾句={i + 1} 例句={例句}/>
      ));
  }

  render() {
    const customStyles = {
      overlay: {
        zIndex: '200',
      },
    };
    let { 漢字, 台羅 } = this.props;
    const 看例句 = !!(漢字 && 台羅);

    return (
        <Modal
          contentLabel="例句表"
          isOpen={看例句}
          onRequestClose={this.props.關例句.bind(this)}
          style={customStyles}
          >
          <h2 ref="subtitle">{漢字} {台羅}<HuatIm 音標={台羅}/></h2>
          <div>
            <span className="分享">
              <分享鍵/>
              <複製連結鍵/>
            </span>
          </div>
          華語：
          <span className='ui horizontal list large'>
            {this.按呢講的外語()}
          </span>


          <div className="ui very relaxed divided list">
            {this.例句()}
          </div>

            <button
              onClick={this.props.關例句.bind(this)}
              className="ui right floated button"
              ><i className="check icon"/>我知影矣</button>
            <留言板 />
        </Modal>
    );
  }
}

export default Transmit.createContainer(例句表, {
  initialVariables: {},
  fragments: {
    按呢講的外語列表({ 漢字, 台羅 }) {
      if (漢字 && 台羅) {
        return superagent.get(後端.揣按呢講列表(漢字, 台羅))
            .then(({ body }) => body.列表)
            .catch((err) => (console.log(err), Promise.resolve([])));
      }

      return Promise.resolve(undefined);
    },

    例句列表({ 漢字, 台羅 }) {
      if (漢字 && 台羅) {
        return superagent.get(後端.例句列表(漢字, 台羅))
        .then(({ body }) => body.例句)
        .catch((err) => (console.log(err), Promise.resolve([])));
      }

      return Promise.resolve(undefined);
    },
  },
});
