import React from 'react';

import Debug from 'debug';

var debug = Debug('itaigi:HapSing');

export default class HapSing extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      id: Math.random().toString(36),
    };
  }

  componentDidMount()
  {
    setTimeout(this.載入.bind(this), Math.random() * 1000);
  }

  componentDidUpdate(prevProps,  prevState)
  {
    setTimeout(this.載入.bind(this), Math.random() * 1000);
  }

  載入() {
    let 音樂 = document.getElementById(this.state.id);
    if (音樂!=null)
      音樂.load();
  }

  play() {
    let 音樂 = document.getElementById(this.state.id);
    if (音樂!=null)
      音樂.play();
  }

  render() {
    let { 音標 } = this.props;
    let 標漢字音標 = (
      音標.replace('?', ' ? ').replace('.', ' . ')
      .replace('/', ' 。 ').trim()
      .split(' ').map((音)=>(音 + '｜' + 音)).join(' ')
    );
    return (
      <div className='HuatIm'>
        <audio id ={this.state.id}>
          <source type='audio/wav'
            src={
              'http://voice.itaigi.tw/語音合成?查詢腔口=閩南語&查詢語句=' + encodeURI(標漢字音標) }
           />
        </audio>
        <button onClick={this.play.bind(this)}
          className='ui compact icon button'>
          <i className='icon play'></i>
        </button>
      </div>
    );
  }
};

