import React from 'react';
import { Link } from 'react-router';
import './IapKha.css';
export default class IapKha extends React.Component {
  render() {
    return (
        <footer className='app footer inverted'>
        <div className='ui stackable menu container inverted'>
          <Link className='item' to='/about'>關於本站</Link>
          <a className='item' target="_blank" href='https://www.facebook.com/ukauitaigi/'>FB</a>
          <a className='item' target="_blank" href='https://g0v-tw.slack.com/messages/itaigi/'>Slack</a>
          <a className='item' target="_blank" href='http://moe.kktix.cc/'>萌典松</a>
          <a className='item' target="_blank" href='http://g0v.tw/'>g0v</a>
          <a className='item' target="_blank" href='https://g0v.hackpad.com/moed7ct-taigi-neologism'>Hackpad</a>
          <a className='item' target="_blank" href='https://github.com/g0v/itaigi'>GitHub</a>
        </div>
      </footer>
    );
  }
}

