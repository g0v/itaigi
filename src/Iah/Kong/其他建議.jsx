import React from 'react';
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import Debug from 'debug';

var debug = Debug('itaigi:Kong其他建議');

export default class 其他建議 extends React.Component {
  render() {
    let 文本 = [];
    this.props.內容.其他建議.forEach((g) => {
      g.新詞文本.forEach((s) => {
        文本.push(s);
      });
    });
    return (
      <div className='kianGi'>
        <h3 className='ui horizontal divider header'>
          <i className='book icon'></i>
          相關的詞
        </h3>
        <GuaGi
          id={this.props.內容.其他建議[0].外語項目編號}
          key={this.props.內容.其他建議[0].外語項目編號}
          新詞文本={文本}
          後端網址={this.props.後端網址}
        />
      </div>
    );
  }
}
