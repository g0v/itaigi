import React from 'react';
import { Link } from 'react-router';
import FBTest from '../../FBTest/FBTest';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';
import Debug from 'debug';
var superagent = require('superagent-promise')(require('superagent'), Promise);

var debug = Debug('itaigi:Kong無關鍵字');


class 新詞區塊 extends React.Component {
  render() {
    if (this.props.newWords.length === 0) {
      return null;
    } 

    return (
      <div className='ui inverted segment'>
        <span className='header large'>燒燙燙新詞：</span>
        {
          this.props.newWords.map(function (su, i) {
            return (
              <Link
                className='ui inverted button basic teal large'
                style={{ marginBottom: '0.25em' }}
                to={'/k/' + su}
                key={i}>
                {su}
              </Link>
            );
          }
        )}
        <div>
          <a onClick={this.props.onShowMoreClick}>{this.props.isShowMore ? '顯示少一點' : '顯示多一點'}</a>
        </div>
      </div>
    );
  }

}

export default class 無關鍵字 extends React.Component {
  state = {
    newWordsLess: [],
    newWordsMore: [],
    isShowMore: false
  }

  onShowMoreClick = () => {
    this.setState({
        isShowMore: !this.state.isShowMore
    });
  }

  componentDidMount() {
    superagent.get(encodeURI(this.props.後端網址 + '平臺項目列表/揣無建議的外語'))
        .then(({ body }) => {
          const newWords = body.列表.map(item => item.外語資料);
          const newWordsLess = newWords.slice(0, 20);
          const newWordsMore = newWords.slice(0, 80);
          this.setState({ 
            newWordsLess,
            newWordsMore
          });
        });
  }

  render() {
    // let hot = ['小屁孩', '秀下限', '白海豚', '躺著也中槍'];

    const newWords = this.state.isShowMore ? this.state.newWordsMore : this.state.newWordsLess;

    return (
      <div className='kong content'>
        <div className='分享'>
          <span>大家來學台語，大家做伙來豐富台語！快分享 iTaigi 給你的朋友知道吧！</span>
          <分享鍵 pathname={ '' }/>
        </div>
        <新詞區塊 newWords={newWords}
         isShowMore={this.state.isShowMore}
         onShowMoreClick={this.onShowMoreClick}/>
        <FBTest/>
      </div>
    );
  }
}

無關鍵字.propTypes = {
  '後端網址': React.PropTypes.string
};
