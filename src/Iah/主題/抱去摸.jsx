import React from 'react';
import Transmit from 'react-transmit';
import 抱去摸三隻 from './抱去摸三隻';
import 抱去摸表 from './抱去摸表.json';
import './抱去摸.css';
import Debug from 'debug';

var debug = Debug('itaigi:抱去摸');

export default class 抱去摸 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      佗一隻: undefined,
    };
  }

  換一隻(名) {
    this.setState({ 佗一隻: 名 });
  }

  撈出寶貝(表) {
    let 顯示 = [];
    let 三隻 = [];

    表.map((一隻, i)=> {
      三隻.push(一隻);
      if (三隻.length === 3 || i === (表.length - 1)) {
        顯示.push(三隻);
        三隻 = [];
      }
    });
    let 寶貝鈕 = 顯示.map((三隻, i)=> (
        <抱去摸三隻 key={i} 後端網址={this.props.後端網址} 寶貝名={三隻}
         佗一隻={this.state.佗一隻} 換一隻={this.換一隻.bind(this)} />
    ));
    return 寶貝鈕;
  }

  render() {
    let 寶貝鈕 = this.撈出寶貝(抱去摸表);
    return (
      <div className='main container'>
        <div className='kong content 寶可夢外口'>
           {寶貝鈕}
        </div>
      </div>
    );
  }
}
