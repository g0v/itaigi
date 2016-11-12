import React from 'react';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';

import Debug from 'debug';

var debug = Debug('itaigi:抱去摸三隻');

export default class 抱去摸三隻 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      顯示: -1,
      資料: [undefined, undefined, undefined],
    };
  }

  點落(編號)
  {
    if (this.state.顯示 == 編號)
      this.setState({ 顯示: -1 });
    else {
      this.setState({ 顯示: 編號 });
      if (this.state.資料[編號] == undefined) {
        return superagent.get(this.props.後端網址 + '平臺項目列表/揣列表?關鍵字=' + this.props.寶貝名[編號])
          .then(function ({ body }) {
            let { 資料 } = this.state;
            資料[編號] = body;
            this.setState({ 資料 });
          }.bind(this))
        .catch((err) => (debug(err)));
      }
    }
  }

  render() {
    let 鈕 = [
      'ui black basic button large',
      'ui black basic button large',
      'ui black basic button large',
    ];
    let { 顯示 } = this.state;
    let 詞條 = '';
    if (顯示 != -1) {
      鈕[顯示] = 'ui red basic button large';
    }

    if (顯示 != -1 && this.state.資料[顯示] != undefined) {
      let g = this.state.資料[顯示].列表[0];
      詞條 = (
        <div className='main container'>
          <GuaGi id={g.外語項目編號}
            key={g.外語項目編號} 新詞文本={g.新詞文本}
            csrftoken={this.props.csrftoken}
            後端網址={this.props.後端網址}/>
        </div>
        );
    } else {
      詞條 = (<div/>);
    }

    return (
      <div className='寶可夢'>
        {鈕.map((鈕仔, 編號)=>(

        <button key={編號}
          className={鈕[編號]}
          onClick={this.點落.bind(this, 編號)}>
          {this.props.寶貝名[編號]}
        </button>
          ))}
        {詞條}
      </div>
    );
  }
}
