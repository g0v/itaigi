import React from 'react';
import { Link } from 'react-router';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
import 後端 from '../../後端';
import './Mia.css';
var superagent = require('superagent-promise')(require('superagent'), Promise);

import Debug from 'debug';
var debug = Debug('itaigi:正規化');

class 正規化 extends React.Component {

  名次(排名) {
    let classes;
    switch (排名) {
      case 1:
        classes = 'ui ribbon yellow label';
        break;
      case 2:
        classes = 'ui ribbon grey label';
        break;
      case 3:
        classes = 'ui ribbon brown label';
        break;
      default:
        classes = '';
    }

    return (<div className={classes}>{ 排名 }</div>);
  }

  render() {
    return (
    <div className='mia main ui text container'>
      若是你對教育部漢字佮台羅誠熟手，會當加入正規化團隊，做伙鬥校對巡喲。
      緊來私訊問
      <a href="https://www.facebook.com/ukauitaigi/" target="_blank">
        <i className='icon facebook square'/>
        FB粉專
      </a>
      <table className='ui celled unstackable table'>
        <thead>
          <tr>
            <th className='collapsing'>名次</th>
            <th>貢獻者</th>
            <th className='collapsing'>數量</th>
          </tr>
        </thead>
        <tbody>
        {
          this.props.MiaData.名人
            .map((g, idx) => (
              <tr key={idx}>
                <td>{ this.名次(idx + 1) }</td>
                <td>{ g.名 }</td>
                <td>{ g.數量 }</td>
              </tr>
            ))
        }
        </tbody>
      </table>
    </div>
    );
  }
}

正規化.propTypes = {
  params: React.PropTypes.object,
  查怎樣講: React.PropTypes.func,
};

export default Transmit.createContainer(正規化, {
  initialVariables: {},
  fragments: {
    MiaData() {
      return superagent.get(後端.正規化貢獻者表())
      .then(({ body }) => (body))
      .catch((err) => ({ '名人': [] }));
    },
  },
});

