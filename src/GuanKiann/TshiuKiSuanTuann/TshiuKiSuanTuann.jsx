import React from 'react';
import { Link } from 'react-router';

/*Pokeball by Arjun Mahanti from the Noun Project*/
import Dictionary from '../ToLam/images/dictionary.svg';

class TshiuKiSuanTuann extends React.Component {

  render() {
    let path = this.props.location.pathname;
    let menu_item_class = function (prefix) {
      if (path == prefix || path.startsWith(prefix + '/') || (path === '/' && prefix === '/k'))
        return 'item active';
      return 'item';
    };

    let itemClick = function () {
      $('.ui.sidebar').sidebar('hide');
    };

    return (
      <div>
        <Link className={menu_item_class('/k')} to='/k' onClick={itemClick}>
          <i className="sound icon"></i>怎樣講
        </Link>
        <Link className={menu_item_class('/t')} to='/name' onClick={itemClick}>
          <i className="question icon"></i>你的名字
        </Link>
        <Link className={menu_item_class('/t')} to='/t' onClick={itemClick}>
          <i className="unmute icon"></i>我很會
        </Link>
        <Link className={menu_item_class('/mia')} to='/mia' onClick={itemClick}>
          <i className="flag icon"></i>名人堂
        </Link>
        <Link className={menu_item_class('/tsing')} to='/tsing' onClick={itemClick}>
          <i className="student icon"></i>正規化團隊
        </Link>
        <Link className={menu_item_class('/iong')} to='/iong' onClick={itemClick}>
          <i className="configure icon"></i>好工具
        </Link>
        <Link className={menu_item_class('/tsu-te')} to='/tsu-te'
            onClick={itemClick}>
          <i className="icon"><img src={Dictionary}/></i>台語寶鑑
        </Link>
        <div className='down item'>
          { '' /* dummy item to show last item border*/ }
        </div>
      </div>
    );
  }
}

export default TshiuKiSuanTuann;
