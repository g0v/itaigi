import React from 'react';
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import 一个建議 from '../../GuanKiann/Su/一个建議';
import Debug from 'debug';

var debug = Debug('itaigi:Kong其他建議');

export default class 其他建議 extends React.Component {
  render() {
    let 文本 = this.props.內容.其他建議.map((建議,i) => (
        <一个建議 key={i}
          後端網址={this.props.後端網址}
          文本資料={建議.文本資料} 音標資料={建議.音標資料} />
    ));
    return (
      <div className='kianGi'>
        <h3 className='ui horizontal divider header'>
          <i className='book icon'></i>
          xx
          xx
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
