import React from 'react';
import { Link } from 'react-router';
import Transmit from 'react-transmit';

var superagent = require('superagent-promise')(require('superagent'), Promise);

import Debug from 'debug';
var debug = Debug('itaigi:Mia');

class Mia extends React.Component {
  render() {
    debug('rendering %o', this.props.MiaData);
    return (
    <div className='main container'>
      <div className='mia ui vertical segment'>
        <div className='ui cards'>
        {
          this.props.MiaData.內容[0].名人.map((g) => (
            <div className='card' key={ g.名 }>
              <div className='content'>
                <h3>{ g.名 } （貢獻詞條數：{ g.數量 }）</h3>
                <div className='padded'>
                  { g.詞條.map((詞)=>
                    <p key={ '/k/' + 詞 }>
                      <Link to={ '/k/' + 詞 } target='_blank'>{ 詞 }</Link>
                    </p>
                  )}
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
  params: React.PropTypes.object,
  MiaData: React.PropTypes.object,
  '後端網址': React.PropTypes.string,
};

export default Transmit.createContainer(Mia, {
  queries: {
    MiaData({ params, 後端網址 }) {
      return superagent.get('http://private-22b88-aweimeow.apiary-mock.com/Mia')
        .then(({ body }) => ({
          '內容': body,
        }));
    },
  },
});

