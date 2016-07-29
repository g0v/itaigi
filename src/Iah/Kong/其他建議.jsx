import React from 'react';
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import Debug from 'debug';

var debug = Debug('itaigi:Kong其他建議');

export default class 其他建議 extends React.Component {
  render() {
    return (
      <div className='kianGi'>
        <h3 className='ui horizontal divider header'>
          <i className='book icon'></i>
          相關的詞
        </h3>
        {this.props.內容.其他建議.map((g) =>
          <GuaGi id={g.外語項目編號}
            key={g.外語項目編號} 新詞文本={g.新詞文本}
            後端網址={this.props.後端網址}/>
        )}
      </div>
    );
  }
}
