import React from 'react';
import 分享鍵 from '../分享鍵/分享鍵';
import 聲母 from './圖/聲母.png';

export default class 學臺羅 extends React.Component {

  renderToo5() {
    return (
    <div className='kong content'>
      <div className='ui basic segment'>
      <div className='ui middle aligned stackable grid container'>
        <div className='row'>
          <div className='eight wide column'>
            <h1 className='ui header'>拼音不熟嗎？來認識聲母吧！</h1>
          </div>

          <div className='eight wide right floated column'>
            <a href='//tailo.moe.edu.tw/pronounces/pronounces01.htm' target='_blank'>
              <img width='480px' style={{ maxWidth: '100%' }} src={聲母}/>
            </a>
          </div>

        </div>
        </div>
      </div>
      <br/>
    </div>
    );
  }

  render() {
    return (
      <div>
        <div className='container'>
          {this.renderToo5()}
        </div>
      </div>
    );
  }
}
