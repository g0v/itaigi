import React from 'react';
import { Link } from 'react-router';
import Transmit from 'react-transmit';
import Promise from 'bluebird';

var superagent = require('superagent-promise')(require('superagent'), Promise);

import Debug from 'debug';
var debug = Debug('itaigi:Mia');

class Mia extends React.Component {

  //componentWillMount() { this.props.setQueryParams(this.props); }

  /**
  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
  }
  **/

  render() {
    debug('rendering %o', this.props.MiaData);
    return (
    <div className='main container'>
      <div className='mia ui vertical segment'>
        <div className='ui cards'>
        {
          this.props.MiaData.內容.名人.map((g) => (
            <div className='card' key={ g.名 }>
              <div className='content'>
                <h3>{ g.名 } （貢獻詞條數：{ g.數量 }）</h3>
                <div className='padded'>
                  { g.詞條.map((詞)=>(
                    <button key={詞}
                      className='ui button basic primary large'
                      onClick={this.props.handleKong.bind(this, 詞)}>
                      {詞}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          ))
        }
        </div>
      </div>
    </div>
    );
  }
}

Mia.propTypes = {
  setQueryParams: React.PropTypes.func,
  MiaData: React.PropTypes.object,
  '後端網址': React.PropTypes.string,
};

export default Transmit.createContainer(Mia, {
  queries: {
    MiaData({ 後端網址 }) {
      //return superagent.get(後端網址 + '貢獻者表')
      return superagent.get('https://db.itaigi.tw/貢獻者表')
      .then(({ body }) => ({
        '內容': body,
      }));
    },
  },
});

