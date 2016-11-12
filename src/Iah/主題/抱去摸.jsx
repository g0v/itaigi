import React from 'react';
import Transmit from 'react-transmit';
import 抱去摸三隻 from './抱去摸三隻';

import Debug from 'debug';

var debug = Debug('itaigi:抱去摸');

export default class 抱去摸 extends React.Component {

  render() {
    let 寶貝 = [
      '寶可夢', '妙蛙種子', '妙蛙草', '妙蛙花', '小火龍',
  ];
    return (
      <div className='main container'>
        <div className='kong content'>
           <抱去摸三隻 key={1} 後端網址={this.props.後端網址} 寶貝名={寶貝}/>
           <抱去摸三隻 key={2} 後端網址={this.props.後端網址} 寶貝名={寶貝}/>
           <抱去摸三隻 key={3} 後端網址={this.props.後端網址} 寶貝名={寶貝}/>
           <抱去摸三隻 key={4} 後端網址={this.props.後端網址} 寶貝名={寶貝}/>
        </div>
      </div>
    );
  }
}
