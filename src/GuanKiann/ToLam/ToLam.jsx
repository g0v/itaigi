import React from 'react';
import { Link } from 'react-router';
import './ToLam.css';
import Logo from './images/logo.svg';

/*Pokeball by Arjun Mahanti from the Noun Project*/
import Dictionary from './images/dictionary.svg';

export default class ToLam extends React.Component {
  render() {
    var path = this.props.pathname;
    var menu_item_class = function (prefix) {
        if (path == prefix || path.startsWith(prefix + '/') || (path === '/' && prefix === '/k'))
          return 'item active';
        return 'item';
      };

    return (
    <div className='app bar container'>
      <div className='title'>
        <Link to='/'>
          <i className='logo'><img src={Logo}/></i>
        </Link>
      </div>
      <div className='ui labeled icon menu'>
      <Link className={menu_item_class('/k')} to='/k'>
          <i className="sound icon"></i>怎樣講
        </Link> 
       <Link className={menu_item_class('/name')} to='/name'>
          <i className="question icon"></i>你的名字
        </Link>
        <Link className={menu_item_class('/t')} to='/t'>
          <i className="unmute icon"></i>我很會
        </Link>
        <Link className={menu_item_class('/mia')} to='/mia'>
          <i className="flag icon"></i>名人堂
        </Link>
        <Link className={menu_item_class('/tsing')} to='/tsing'>
          <i className="student icon"></i>正規化團隊
        </Link>
        <Link className={menu_item_class('/iong')} to='/iong'>
          <i className="configure icon"></i>好工具
        </Link>
        <Link className={menu_item_class('/tsu-te')} to='/tsu-te'>
          <i className="icon"><img src={Dictionary}/></i>台語寶鑑
        </Link>
      </div>
      <div className="ui right item">
        <div className="menu">
          <a className="item"
             href="https://www.facebook.com/ukauitaigi/" target="_blank">
            <i className="facebook square icon big"></i>
          </a>
          <Link className="item" to="/about">
            <i className="info circle icon big"></i>
          </Link>
        </div>
      </div>
    </div>
    );
  }
}
