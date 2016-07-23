import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import ABo from '../../GuanKiann/ABo/ABo';
import KiuKongHuat from '../../GuanKiann/KiuKongHuat/KiuKongHuat';
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import Disqus from '../../Disqus/Disqus';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import Debug from 'debug';

var debug = Debug('itaigi:Kong');

class Kong extends React.Component {
  componentWillMount() { this.props.setQueryParams(this.props); }

  componentWillReceiveProps(nextProps) {
    if (nextProps.params === this.props.params) return;
    this.props.setQueryParams(nextProps);
  }

  renderTshueSiann() {
    console.log('hey!')
    return (
    <div className='kong content'>
      <div className='ui segment'>
        <button
            className='ui button basic primary large'
            onClick={this.props.欲提供講法.bind(this,"寶可夢")}>
            寶可夢
        </button>
      </div>
    </div>
    );
  }

  renderTshoGoo() {
    return (
    <div className='kong content'>
      <div className='ui segment'>
        <h3>找「{this.props.kongData.關鍵字}」錯了嗎？</h3>
        {this.props.kongData.內容}
        <button className='ui button large olive'>
          <i className='student icon'></i>
          求講法
        </button>
      </div>
      <h3>我會曉，會使按呢講</h3>
      <ABo 華語關鍵字={this.props.kongData.關鍵字}
        後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
        編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
      />
    </div>
    );
  }

  renderKiatKo() {
    console.log(this.props.kongData.結果);
    if (this.props.kongData.結果 === 0) {
      return (
      <div className='tshueBo'>
        <KiuKongHuat 華語關鍵字={this.props.kongData.關鍵字}
          後端網址={this.props.後端網址} csrftoken={this.props.csrftoken} />
        <h3 className='ui horizontal divider header'>
          <i className='cloud upload icon'></i>
          我會曉，會使按呢講
        </h3>
        <ABo 華語關鍵字={this.props.kongData.關鍵字}
          後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
          編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
        />
        <h3 className='ui horizontal divider header'>
          <i className='outline comments icon'></i>
          來討論
          「<span className='ui pink header'>{this.props.kongData.關鍵字}</span>」
        </h3>
        <Disqus pathname={this.props.location.pathname}/>
      </div>
      );
    }

    return (
    <div className='kongHuat'>
      {this.props.kongData.內容.列表.map((g) => (
        <GuaGi id={g.外語項目編號}
          key={g.外語項目編號} 新詞文本={g.新詞文本}
          csrftoken={this.props.csrftoken}
          後端網址={this.props.後端網址}/>
      ))}
      <h3 className='ui horizontal divider header'>
        <i className='cloud upload icon'></i>
        閣會使按呢講，我來做伙添
      </h3>
      <ABo 華語關鍵字={this.props.kongData.關鍵字}
       後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
       編號={this.props.編號} 漢字={this.props.location.query.漢字} 音標={this.props.location.query.音標}
       />
      <h3 className='ui horizontal divider header'>
        <i className='outline comments icon'></i>
        來討論
        「<span className='ui pink header'>{this.props.kongData.關鍵字}</span>」
      </h3>
      <Disqus pathname={this.props.location.pathname}/>
    </div>
    );
  }

  renderKianGi() {
    return (
    <div className='kianGi'>
      <h3 className='ui horizontal divider header'>
        <i className='book icon'></i>
        相關的詞
      </h3>
      {this.props.kongData.內容.其他建議.map((g) =>
        <GuaGi id={g.外語項目編號}
          key={g.外語項目編號} 新詞文本={g.新詞文本}
          後端網址={this.props.後端網址}/>
      )}
    </div>
    );
  }

  render() {
    debug('rendering %o', this.props.kongData);
    return (
    <div className='main container'>
      <nav className='navigation'>
        <Tshue
          defaultValue={this.props.params.k}
          handleSubmit={this.props.handleKong.bind(this)}
          {...this.props}/>
      </nav>
      <div className='kong content'>
        {this.props.kongData.結果 >= 0 ? this.renderKiatKo()
        : this.props.kongData.結果 === -1 ? this.renderTshoGoo()
        : this.renderTshueSiann()}
        {this.props.kongData.結果 > 0 ? this.renderKianGi() : []}
      </div>
    </div>
    );
  }
}

Kong.propTypes = {
    setQueryParams: React.PropTypes.func,
    params: React.PropTypes.object,
    kongData: React.PropTypes.object,
    '後端網址': React.PropTypes.string,
    handleKong: React.PropTypes.func,
  };

export default Transmit.createContainer(Kong, {
  queries: {
    kongData({ params, 後端網址 }) {
      if (params === undefined || params.k === undefined) {
        return Promise.resolve({
          '結果': -2,
          '訊息': '沒有提供關鍵字',
        });
      }

      return superagent.get(後端網址 + '平臺項目列表/揣列表?關鍵字=' + params.k)
        .then(({ body }) => ({
          '關鍵字': params.k,
          '結果': body.列表.length,
          '內容': body,
        }))
      .catch((err) => ({
        '關鍵字': params.k,
        '結果': -1,
        '訊息': '發生錯誤',
        '內容': err,
      }));
    },
  },
});
