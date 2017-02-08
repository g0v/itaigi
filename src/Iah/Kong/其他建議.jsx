import React from 'react';
import 一个建議 from '../../GuanKiann/Su/一个建議';
import './其他建議.css';
import Debug from 'debug';

var debug = Debug('itaigi:Kong其他建議');

export default class 其他建議 extends React.Component {
  render() {
    let 文本 = this.props.內容.其他建議.map((建議, i) => (
        <一个建議 key={i}
          後端網址={this.props.後端網址}
          文本資料={建議.文本資料} 音標資料={建議.音標資料}
          來開例句={this.props.開例句.bind(this, this.props.華語關鍵字, 建議.文本資料, 建議.音標資料)}/>
    ));
    if (文本.length == 0) {
      return null;
    }

    return (
      <div className='kianGi'>
        <h3 className='ui horizontal divider header'>
          <i className='book icon'></i>
          相關詞條
        </h3>
        <div className='ui su vertical segment'>
          <div className='ui cards'>
            {文本}
          </div>
        </div>
      </div>
    );
  }
}
