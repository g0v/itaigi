import React from 'react';
import Su from '../Su/Su';
import SuTsitPuann from '../Su/SuTsitPuann';
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

  顯示詞(詞) {
    let 來開例句 = this.props.開例句.bind(this, this.props.華語關鍵字, 詞.文本資料, 詞.音標資料);
    return <Su
      suId={詞.新詞文本項目編號}
      suText={詞.文本資料}
      suIm={詞.音標資料}
      貢獻者={詞.貢獻者}
      按呢講好={詞.按呢講好}
      按呢無好={詞.按呢無好}
      按呢講的外語列表 = {詞.按呢講的外語列表}
      key={詞.新詞文本項目編號}
      csrftoken={this.props.csrftoken}
      來開例句={來開例句}
      variables={{ 詞 }}
      renderLoading={this.詞載入中(詞, 來開例句)} />;
  }

  詞載入中(詞, 來開例句) {
    return (
      <SuTsitPuann
        詞={詞}
        來開例句={來開例句}/>
      );
  }

  render() {
    if (!this.props.新詞文本) {
      return <div></div>;
    }

    var uniqueSu = this.dedupeSu(this.props.新詞文本);

    var suList = uniqueSu.map(this.顯示詞.bind(this));
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
               csrftoken={this.props.csrftoken}
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
