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

  貢獻程度(數量) {
    let 心;
    if (數量 <= 5) {
      心 = Array.from(new Array(數量)).map((i, j)=>(
        <i key={j} className="mini red heart icon"></i>
      ));
    } else if (數量 <= 13) {
      心 = Array.from(new Array(Math.floor((數量 - 5) / 2) + 1)).map((i, j)=>(
        <i key={j} className="small red heart icon"></i>
      ));
    } else if (數量 <= 33) {
      心 = Array.from(new Array(Math.floor((數量 - 13) / 5) + 1)).map((i, j)=>(
       <i key={j} className="large red heart icon"></i>
     ));
    } else {
      心 = Array.from(new Array(Math.floor((數量) / 50) + 1)).map((i, j)=>(
       <i key={j} className="big red heart icon"></i>
     ));
    }

    return (<span>{心}</span>);
  }

  render() {
    return (
    <div className='main container'>
      <div className='mia ui vertical segment'>
        <div className='ui cards'>
        {
          this.props.MiaData.內容.名人.map((g) => (
            <div className='card' key={ g.名 }>
              <div className='content'>
                <h3>{ g.名 }{ this.貢獻程度(+g.數量) }</h3>
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

