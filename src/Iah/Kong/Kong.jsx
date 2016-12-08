import React from 'react';
import Transmit from 'react-transmit';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import 錯誤 from './錯誤';
import 無結果 from './無結果';
import 有講法 from './有講法';
import 無關鍵字 from './無關鍵字';
import 其他建議 from './其他建議';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import './Kong.css';

import Debug from 'debug';

var debug = Debug('itaigi:Kong');

class Kong extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      kongData: {
          '結果': -2,
          '訊息': '沒有提供關鍵字',
        },
    };
  }

  componentWillMount() { this.查詞條(); }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.查詞條();
  }

  查詞條()
  {
    let 關鍵字 = this.props.params.k;
    this.setState({'關鍵字': 關鍵字})
    superagent.get(encodeURI(
      this.props.後端網址 + '平臺項目列表/揣列表?關鍵字=' + 關鍵字
      ))
      .then(({ body }) => (
        關鍵字 == this.props.params.k ?
        this.setState({
        // '關鍵字': 關鍵字,
        '結果': body.列表.length,
        '內容': body,
        'aa':debug(關鍵字),
        'aa2':debug(this.props.params.k),
        'aa3':debug(this.state.關鍵字),
       }) :
        ''
        ))
    .catch((err) => (
      關鍵字 == this.props.params.k ?
      this.setState({
      // '關鍵字': 關鍵字,
      '結果': -1,
      '訊息': '發生錯誤',
      '內容': err,
    }) :
      ''
      ));
  }

  render無關鍵字() {
    return (
      <無關鍵字 後端網址={this.props.後端網址}/>
    );
  }

  render錯誤() {
    return (
      <錯誤 華語關鍵字={this.state.關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
        編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
        內容={this.state.內容}/>
    );
  }

  render無結果() {
    return (
      <無結果 華語關鍵字={this.state.關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
        pathname={this.props.location.pathname}
        編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}/>
    );
  }

  render有講法() {
    return (
      <有講法 華語關鍵字={this.state.關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
        pathname={this.props.location.pathname}
        編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
        內容={this.state.內容}/>
    );
  }

  render其他建議() {
    return (
      <其他建議
        後端網址={this.props.後端網址}
        內容={this.state.內容}/>
    );
  }

  render() {
    debug(this.state);
    return (
    <div className='main container'>
      <nav className='navigation'>
        <Tshue
          defaultValue={this.props.params.k}
          查怎樣講={this.props.查怎樣講.bind(this)}
          {...this.props}/>
      </nav>
      <div className='kong content'>
        {
          this.state.結果 > 0 ? this.render有講法()
          : this.state.結果 === 0 ? this.render無結果()
          : this.state.結果 === -1 ? this.render錯誤()
          : this.render無關鍵字()
        }
        {
          this.state.結果 >= 0 && this.state.內容.其他建議.length > 0 ?
          this.render其他建議() : ''
        }
      </div>
    </div>
    );
  }
}

Kong.propTypes = {
    setQueryParams: React.PropTypes.func,
    params: React.PropTypes.object,
    '後端網址': React.PropTypes.string,
    查怎樣講: React.PropTypes.func,
  };

export default Transmit.createContainer(Kong, {
  queries: {
  },
});
