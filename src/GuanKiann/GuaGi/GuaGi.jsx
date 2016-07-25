import React from 'react';
import Transmit from 'react-transmit';
import Su from '../Su/Su';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:GuaGi');

class GuaGi extends React.Component {

  componentWillMount() { this.props.setQueryParams(this.props); }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
  }

  render() {
    if (!this.props.新詞文本) {
      return <div></div>;
    }

    var suList = this.props.新詞文本.map((d) => <Su
      suId={d.新詞文本項目編號}
      suText={d.文本資料}
      suIm={d.音標資料}
      貢獻者={d.貢獻者}
      key={d.新詞文本項目編號}
      csrftoken={this.props.csrftoken}
      後端網址={this.props.後端網址} />
    );
    return (
    <div className='guaGi'>
      <div className='ui su vertical segment'>
        <div className='ui cards'>
          {suList}
        </div>
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(GuaGi, {
  queries: {
  },
});
