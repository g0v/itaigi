import React from 'react';
import './台語寶鑑.css';
import 寶鑑按鈕 from './寶鑑按鈕';

export default class 台語寶鑑 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          image: require('../../GuanKiann/ToLam/images/noun_237634_cc.svg'),
          name: '抱去摸',
          to: '/tsu-te/pho-khi-bong',
        },
        {
          image: require('./images/financial.svg'),
          name: '金融kah台語',
          to: '/tsu-te/kim-iong-kah-tai-gi',
        },
      ],
    };
  }

  appendButtons() {
    return this.state.data.map((d) => <寶鑑按鈕 data={d} key={d.name} />);
  }

  render() {
    return (
      <div className="main container">
        <div className="kong content">
          <div className="台語寶鑑-row">
            { this.appendButtons() }
          </div>
        </div>
      </div>
    );
  }
}
