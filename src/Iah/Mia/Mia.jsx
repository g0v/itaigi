import React from 'react';
import { Link } from 'react-router';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
import 後端 from '../../後端';
import './Mia.css';
var superagent = require('superagent-promise')(require('superagent'), Promise);

import Debug from 'debug';
var debug = Debug('itaigi:Mia');

class Mia extends React.Component {

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

Mia.propTypes = {
  params: React.PropTypes.object,
  查怎樣講: React.PropTypes.func,
};

export default Transmit.createContainer(Mia, {
  initialVariables: {},
  fragments: {
    MiaData() {
      return superagent.get(後端.貢獻者表())
      .then(({ body }) => (body))
      .catch((err) => ({ '名人': [] }));
    },
  },
});

