import React from 'react';
import { Link } from 'react-router';
import FBTest from '../../FBTest/FBTest';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';
import 後端 from '../../後端';
import Debug from 'debug';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);

var debug = Debug('itaigi:Kong無關鍵字');

class 新詞區塊 extends React.Component {
  render() {
    const loading = this.props.newWords.length === 0;

    return (
      <div>
      <p></p>
      <h3 className='ui horizontal divider header'>
          <i className='ui icon rocket'/>燒燙燙 台語新詞
      </h3>

      <div className='ui inverted segment 燒燙燙'>
        <div className={`ui ${loading ? 'active' : ''} dimmer`}>
          <div className='ui text loader'>小等一下</div>
        </div>
        <span className={`header large ${loading ? 'loading' : ''}`}></span>
        {
          this.props.newWords.map(function (su, i) {
            return (
              <Link
                className='ui black large button'
                style={{ marginBottom: '0.25em' }}
                to={'/k/' + su}
                key={i}>
                {su}
              </Link>
            );
          }
        )}
        {this.props.isShowMore ? '' : (
          <button
            className={`${loading ? 'loading' : 'ui button  large'}`}
            onClick={this.props.onShowMoreClick}>顯示多一點
          </button>
        )}
      </div>
      </div>
    );
  }

}

export default class 無關鍵字 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      newWordsLess: [],
      newWordsMore: [],
      isShowMore: false,
    };

    this.onShowMoreClick = () => {
      this.setState({
          isShowMore: !this.state.isShowMore,
        });
    };
  }

  componentDidMount() {
    superagent.get(後端.揣上新貢獻的外語())
        .then(({ body }) => {
          const newWords = body.列表.map(item => item.外語資料);
          const newWordsLess = newWords.slice(0, 20);
          const newWordsMore = newWords.slice(0, 80);
          this.setState({
            newWordsLess,
            newWordsMore,
          });
        });
  }

  render() {
    // let hot = ['小屁孩', '秀下限', '白海豚', '躺著也中槍'];

    const newWords = this.state.isShowMore ? this.state.newWordsMore : this.state.newWordsLess;

    return (
      <div className='kong content'>
        <新詞區塊 newWords={newWords}
         isShowMore={this.state.isShowMore}
         onShowMoreClick={this.onShowMoreClick}/>
        <FBTest/>
      </div>
    );
  }
}
