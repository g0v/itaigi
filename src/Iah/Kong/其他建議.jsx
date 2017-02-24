import React from 'react';
import 一个建議 from '../../GuanKiann/Su/一个建議';
import './其他建議.css';
import Debug from 'debug';

var debug = Debug('itaigi:Kong其他建議');

export default class 其他建議 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      全開: this.預設顯示幾个(),
    };
    this.查過的詞 = new Set();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.內容.其他建議 != this.props.內容.其他建議) {
      this.setState({ 全開: this.預設顯示幾个() });
    }
  }

  預設顯示幾个() {
    return 24;
  }

  看閣較濟() {
    if (this.props.內容.其他建議.length > this.state.全開)
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
    let { 全開 } = this.state;
    全開 += this.預設顯示幾个();
    this.setState({ 全開 });
  }

  建議載入中() {
    return (
      <div className='su ui card'>
        <div className='content'>
          載入中，小等一下...
        </div>
      </div>
    );
  }

  render() {
    let 其他建議 = this.props.內容.其他建議.slice(0, this.state.全開);

    let 文本 = 其他建議.map((建議, i) => (
        <一个建議 key={i}
          文本資料={建議.文本資料}
          音標資料={建議.音標資料}
          來開例句={this.props.開例句.bind(this, this.props.華語關鍵字, 建議.文本資料, 建議.音標資料)}
          variables={建議}
          renderLoading={this.建議載入中} />
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
        <div className='ui vertical segment'>
        <div className='ui stackable cards'>
            {文本}
            {this.看閣較濟()}
          </div>
        </div>
      </div>
    );
  }
}
