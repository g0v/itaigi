import React from 'react';
import Tshue from '../../GuanKiann/Tshue/Tshue';
import ABo from '../../GuanKiann/ABo/ABo';
import KiuKongHuat from '../../GuanKiann/KiuKongHuat/KiuKongHuat';
import 其他建議 from './其他建議';
import 分享鍵 from '../../GuanKiann/分享鍵/分享鍵';
import 留言板 from '../../GuanKiann/留言板/留言板';
import Debug from 'debug';

var debug = Debug('itaigi:Kong無結果');

export default class 無結果 extends React.Component {
  render() {
    return (
      <div className='tshueBo'>
         <div className='分享'>
           <span>「{ this.props.華語關鍵字 }」的台語要怎麼說呢？來考考你的朋友吧！</span>
           <分享鍵 pathname={this.props.pathname}/>
        </div>

    <div className='guaGi'>
        <div className='ui su vertical segment'>
          <div className='ui stackable cards'>
            <div className='ui su card'>
              <div className='content'>
                <KiuKongHuat 華語關鍵字={this.props.華語關鍵字}
                  csrftoken={this.props.csrftoken} />
              </div>
            </div>
            <div className='ui su card'>
              <div className='content'>
                <h3 className='ui horizontal divider header'>
                  <i className='cloud upload icon'></i>
                  我會曉，會使按呢講
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

      <其他建議
        內容={this.props.內容}
        華語關鍵字={this.props.華語關鍵字}
        開例句={this.props.開例句.bind(this)}/>

        <h3 className='ui horizontal divider header'>
          <i className='outline comments icon'></i>
          來討論
          「<span className='ui pink header'>{this.props.華語關鍵字}</span>」
        </h3>
        <留言板 />
      </div>
    );
  }
}
