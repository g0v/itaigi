import React from 'react';
import Transmit from 'react-transmit';
import Su from '../Su/Su';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import ABo from '../../GuanKiann/ABo/ABo';
import 例句表 from '../../GuanKiann/例句/例句表';

import Debug from 'debug';
import './GuaGi.css';

var debug = Debug('itaigi:GuaGi');

class GuaGi extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      看例句: false,
    };
  }

  開例句() {
    this.setState({
      看例句: true,
    });
  }

  關例句() {
    this.setState({
      看例句: false,
    });
  }

  componentWillMount() { this.props.setQueryParams(this.props); }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
  }

  dedupeSu(inSu) {
    var seen = {};
    return inSu.filter((val, id) => {
      var key = val.文本資料 + val.音標資料;
      if (seen[key])
        return false;
      seen[key] = true;
      return true;
    });
  }

  render() {
    if (!this.props.新詞文本) {
      return <div></div>;
    }

    var uniqueSu = this.dedupeSu(this.props.新詞文本);

    var suList = uniqueSu.map((d) => <Su
      suId={d.新詞文本項目編號}
      suText={d.文本資料}
      suIm={d.音標資料}
      貢獻者={d.貢獻者}
      key={d.新詞文本項目編號}
      csrftoken={this.props.csrftoken}
      後端網址={this.props.後端網址}
      開例句={this.開例句.bind(this)}
      />
    );
    return (
    <div className='guaGi'>
      <div className='ui su vertical segment'>
        <div className='ui cards'>
          {suList}

          <div className='su card'>
            <div className='content'>
              <h3 className='ui header'>
                <i className='cloud upload icon'></i>
                閣會使按呢講
              </h3>
              <ABo 華語關鍵字={this.props.華語關鍵字}
               後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
               編號={this.props.編號} 漢字={this.props.漢字} 音標={this.props.音標}
               />
            </div>
          </div>
        </div>
      </div>
      <例句表 看例句={this.state.看例句} 關例句={this.關例句.bind(this)} 
        漢字={'漢字'} 台羅={'Tāi-tsì tsò-liáu tsin sù-sī. '}
        />
    </div>
    );
  }
}

export default Transmit.createContainer(GuaGi, {
  queries: {
  },
});
