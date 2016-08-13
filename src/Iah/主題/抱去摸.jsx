import React from 'react';
import Transmit from 'react-transmit';
import 抱去摸一隻 from './抱去摸一隻';

import Debug from 'debug';

var debug = Debug('itaigi:抱去摸');

export default class 抱去摸 extends React.Component {
  
  render() {
    let 寶貝=['寶可夢','妙蛙種子'].map((名)=>(<抱去摸一隻 key={名} 後端網址={this.props.後端網址} 寶貝名={名}/>));
    return (
      <div className='main container'>
        <div className='kong content'>
           {寶貝}
        </div>
      </div>
    );
  }
}
