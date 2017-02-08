import React from 'react';
import GuaGi from '../../GuanKiann/GuaGi/GuaGi';
import 一个建議 from '../../GuanKiann/Su/一个建議';
import './其他建議.css';
import Debug from 'debug';

var debug = Debug('itaigi:Kong其他建議');

export default class 其他建議 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      全開: false,
    };
    this.查過的詞 = new Set();
  }

  預設顯示幾个() {
    return 30;
  }

  看閣較濟() {
    if (!this.state.全開 && this.props.內容.其他建議.length > this.預設顯示幾个())
    return (
      <div className='su card'>
        <div className='content'>
          <button onClick={this.看閣較濟全開.bind(this)}
            className='ui icon button'>
            看閣較濟
          </button>
        </div>
      </div>
      );
  }

  看閣較濟全開() {
    this.setState({ 全開: true });
  }

  render() {
    let 其他建議;
    if (this.state.全開) {
      其他建議 = this.props.內容.其他建議;
    } else {
      其他建議 = this.props.內容.其他建議.slice(0, this.預設顯示幾个());
    }

    let 文本 = 其他建議.map((建議, i) => (
        <一个建議 key={i}
          後端網址={this.props.後端網址}
          文本資料={建議.文本資料} 音標資料={建議.音標資料} />
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
            {this.看閣較濟()}
          </div>
        </div>
      </div>
    );
  }
}
