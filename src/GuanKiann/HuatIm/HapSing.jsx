import React from 'react';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);

import Debug from 'debug';

var debug = Debug('itaigi:HapSing');

class HapSing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: Math.random().toString(36),
    };
  }

  componentWillMount() {
    this.props.setQueryParams(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
  }

  play(id) {
    debug('play', id);
    document.getElementById(id).load();
    document.getElementById(id).play();
  }

  render() {
    debug('標漢字音標', this.props.標漢字音標);
    return (
      <div className='HuatIm'>
        <audio id ={this.state.id} autoPlay>
          <source type='audio/wav'
            src={
              'http://服務.意傳.台灣/語音合成?查詢腔口=閩南語&查詢語句=' + encodeURI(this.props.標漢字音標) }
           />
        </audio>
        <button onClick={this.play.bind(this, this.state.id)}
          className='ui compact icon button'>
          <i className='icon play'></i>
        </button>
      </div>
    );
  }
};

export default Transmit.createContainer(HapSing, {
  queries: {
    標漢字音標({ 音標 }) {
      debug('音標', 音標);
      return (
        superagent.get('http://服務.意傳.台灣/標漢字音標?查詢腔口=閩南語&查詢語句=' + 音標)
        .then(({ body }) => (body.翻譯正規化結果))
        .catch((err) => debug(err))
      );
    },
  },
});
