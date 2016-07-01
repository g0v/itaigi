import React from 'react';
import Transmit from 'react-transmit';
import LaiLik from '../LaiLik/LaiLik';
import HuatIm from '../HuatIm/HuatIm';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:Su');

class Su extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      按呢講好: props.suData.按呢講好,
      按呢無好: props.suData.按呢無好,
    };
  }

  componentWillMount() {
    this.props.setQueryParams(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
  }

  投票(evt) {
    var 票 = {
      '平臺項目編號': this.props.suId,
      'decision': evt,
    };
    superagent.post(this.props.後端網址 + '平臺項目/投票')
      .withCredentials()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('X-CSRFToken', this.props.csrftoken)
      .send(票)
      .then(({body}) => {if (body.success) console.log('succeed: '+body.suId)})
      .catch(res => {
        console.log(res);
      });
    if (evt === '按呢講好')
      this.setState({按呢講好: (this.state.按呢講好 || this.props.suData.按呢講好)+1});
    else if (evt === '按呢無好')
      this.setState({按呢無好: (this.state.按呢無好 || this.props.suData.按呢無好)+1});
  }

  render() {
    const { suText, suData, 後端網址 } = this.props;
    if (suData.結果 == -2) {
      return <div className='su item'></div>;
    }

    return (
    <div className='su card'>
      <div className='content'>
        <div className='left floated'>
          <div className='header green'>
          {suText}
          </div>
          <div className='meta'>
          {suData.屬性內容 ? suData.屬性內容.音標 : ''}
          </div>
        </div>
        <HuatIm suData={suData} />
        <div className='description'>
            <LaiLik laiLikId={suData.來源} 後端網址={後端網址} />
        </div>
        <div className='ui list'>
          <div className='item'>
            <i className='thumbs outline up icon'></i>
            <div className="content">
              按呢講好 ({this.state.按呢講好 || suData.按呢講好})
              <div className="ui button left pointing label green" onClick={this.投票.bind(this, '按呢講好')}>
              +1
              </div>
            </div>
          </div>
          <div className='item'>
            <i className='thumbs outline down icon'></i>
            <div className="content">
              按呢無好 ({this.state.按呢無好 || suData.按呢無好})
              <div className="ui button left pointing label teal" onClick={this.投票.bind(this, '按呢無好')}>
              +1
              </div>
            </div>
          </div>
          <div className='item'>
            <i className='comments outline icon'></i>
            <div className="content">
              討論 (6)
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(Su, {
  queries: {
    suData({ suId, 後端網址 }) {
      if (!suId) {
        return Promise.resolve({
          '結果': -2,
        });
      }

      return superagent.get(後端網址 + '平臺項目/看詳細內容?平臺項目編號=' + suId)
        .then((res) => Object.assign({
            '結果': 0,
          }, res.body))
        .catch((err) => console.log(err));
    },
  },
});
