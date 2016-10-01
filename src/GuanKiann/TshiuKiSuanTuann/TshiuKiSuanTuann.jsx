import React from 'react';
import { Link } from 'react-router';

class TshiuKiSuanTuann extends React.Component {

  render() {
    let path = this.props.location.pathname;
    let menu_item_class = function (prefix) {
      if (path.startsWith(prefix) || (path === '/' && prefix === '/k'))
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
        <Link className={menu_item_class('/t')} to='/t' onClick={itemClick}>
          <i className="unmute icon"></i>我很會
        </Link>
        <Link className={menu_item_class('/iong')} to='/iong' onClick={itemClick}>
          <i className="configure icon"></i>好工具
        </Link>
        <div className='down item'>
          {/* dummy item to show last item border*/}
        </div>
      </div>
    );
  };
}

export default TshiuKiSuanTuann;
