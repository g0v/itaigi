import React from 'react';
import Transmit from 'react-transmit';
import { Link } from 'react-router';
import './ToLam.css';
import Logo from './images/logo.svg';

class ToLam extends React.Component {
  render() {
    return (
    <div className='app bar container'>
      <h1 className='title segment'>
        <Link to='/'>
          <i className='logo'><img src={Logo}/></i>
        </Link>
      </h1>
      <div className='ui labeled icon menu'>
        <Link className='item' to='/k' params={{ k: '' }}>
          <i className="sound icon"></i>怎樣講
        </Link>
        <Link className='item' to='/l'>
          <i className="comments outline icon"></i>來討論
        </Link>
        <Link className='item' to='/t'>
          <i className="unmute icon"></i>我很會
        </Link>
        <Link className='item' to='/iong'>
          <i className="configure icon"></i>好工具
        </Link>
        <Link className='item' to='/mia'>
          <i className="flag icon"></i>名人堂
        </Link>
      </div>
      <div className="ui right item">
        <div className="menu">
          <a className="item" href="https://www.facebook.com/ukauitaigi/" target="_blank">
            <i className="facebook square icon big"></i>
          </a>
          <a className="item" href="https://plus.google.com/103323777656269234410/posts" target="_blank">
            <i className="google plus square icon big"></i>
          </a>
          <a className="item" href="#" target="_blank">
            <i className="twitter square icon big"></i>
          </a>
        </div>
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(ToLam, { query: {} });
