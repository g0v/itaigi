import React from 'react';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';

import Debug from 'debug';

var debug = Debug('itaigi:抱去摸一隻');

class 抱去摸一隻 extends React.Component {

  componentWillMount() { this.props.setQueryParams(this.props); }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
  }

  render() {
    if (this.props.寶貝.列表 === undefined)
      return (<div/>);
    let g = this.props.寶貝.列表[0];
    return (
      <div className='main container'>
        <h2>{this.props.寶貝名}</h2>
        <GuaGi id={g.外語項目編號}
          key={g.外語項目編號} 新詞文本={g.新詞文本}
          csrftoken={this.props.csrftoken}
          後端網址={this.props.後端網址}/>
      </div>
    );
  }
}
export default Transmit.createContainer(抱去摸一隻, {
  queries: {
    寶貝({ 後端網址, 寶貝名 }) {
      if (後端網址 === undefined || 寶貝名 === undefined) {
        return Promise.resolve({
        });
      }

      return superagent.get(後端網址 + '平臺項目列表/揣列表?關鍵字=' + 寶貝名)
        .then(({ body }) => ({
          列表: body.列表,
        }))
      .catch((err) => (debug(err)));
    },
  },
});
