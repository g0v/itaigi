import React from 'react';
import Su from '../Su/Su';
import ABo from '../../GuanKiann/ABo/ABo';
import Debug from 'debug';
import './GuaGi.css';

var debug = Debug('itaigi:GuaGi');

export default class GuaGi extends React.Component {

  dedupeSu(inSu) {
    var seen = {};
    return inSu.filter((val, id) => {
      var key = val.文本資料 + val.音標資料;
      if (seen[key])
        return false;
      seen[key] = true;
      return true;
    });
  }

  render() {
    debug('%o', this.props);
    if (!this.props.新詞文本) {
      return <div></div>;
    }

    var uniqueSu = this.dedupeSu(this.props.新詞文本);

    var suList = uniqueSu.map((d) => <Su
      suId={d.新詞文本項目編號}
      suText={d.文本資料}
      suIm={d.音標資料}
      貢獻者={d.貢獻者}
      key={d.新詞文本項目編號}
      csrftoken={this.props.csrftoken}
      後端網址={this.props.後端網址}
      來開例句={this.props.開例句.bind(this, this.props.華語關鍵字, d.文本資料, d.音標資料)}
      />
    );
    return (
    <div className='guaGi'>
      <div className='ui su vertical segment'>
        <div className='ui stackable cards'>
          {suList}
          <div className='ui su card'>
            <div className='content'>
              <h3 className='ui header'>
                <i className='cloud upload icon'></i>
                閣會使按呢講
              </h3>
              <ABo 華語關鍵字={this.props.華語關鍵字}
               後端網址={this.props.後端網址} csrftoken={this.props.csrftoken}
               編號={this.props.編號} 漢字={this.props.漢字} 音標={this.props.音標}
               />
            </div>
          </div>
        </div>
      </div>
    </div>
    );
  }
}
