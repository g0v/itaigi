import React from 'react';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import 後端 from '../../後端';

import Debug from 'debug';

var debug = Debug('itaigi:抱去摸三隻');

export default class 抱去摸三隻 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      資料: undefined,
    };
  }

  componentWillReceiveProps(nextProps) {
    if (this.state.資料 != undefined) {
      this.setState({ 資料: undefined });
    }
  }

  componentDidUpdate(prevProps,  prevState)
  {
    if (this.state.資料 != undefined) {
      this.refs.寶可夢0.focus();
    }
  }

  點落(名)
  {
    if (this.props.佗一隻 == 名)
      this.props.換一隻(undefined);
    else {
      this.props.換一隻(名);
      superagent.get(後端.揣列表(名))
       .then(({ body }) =>(this.setState({ 資料: body }), null))
       .catch((err) => (debug(err)));
      setTimeout(()=>(this.refs.寶可夢0.focus()), 50);
    }
  }

  render() {
    let { 寶貝名, 佗一隻 } = this.props;
    let 鈕 = [
      'ui black basic button large',
      'ui black basic button large',
      'ui black basic button large',
    ];
    let 詞條 = '';
    let 顯示 = -1;
    寶貝名.map((名, i)=>(名 == 佗一隻 ? 顯示 = i : 顯示));

    if (顯示 != -1) {
      鈕[顯示] = 'ui red basic button large';
    }

    if (this.state.資料 != undefined) {
      let g = this.state.資料.列表[0];
      詞條 = (
        <div className='main container'>
          <GuaGi id={g.外語項目編號}
            key={g.外語項目編號} 新詞文本={g.新詞文本}
            csrftoken={this.props.csrftoken}
            開例句={()=>('')} />
        </div>
        );
    } else {
      詞條 = (<div/>);
    }

    return (
      <div className='寶可夢'>
        <div className="three ui buttons">
          {寶貝名.map((鈕仔, 編號)=>(

          <button key={編號} ref={'寶可夢' + 編號}
            className={鈕[編號]}
            onClick={this.點落.bind(this, 寶貝名[編號])}>
            {寶貝名[編號]}
          </button>
            ))}
        </div>
        {詞條}
      </div>
    );
  }
}
