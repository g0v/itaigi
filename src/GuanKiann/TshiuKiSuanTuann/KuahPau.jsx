import React from 'react';
import './KuahPau.css';

class KuahPau extends React.Component {

  componentDidmount() {
    $('.ui.sidebar').sidebar('hide');
    $('.ui.sidebar').sidebar('setting', 'onHide', () => {
    });
    $('.ui.sidebar').sidebar('setting', 'onVisible', () => {
    });
  }

  render() {
    return (
      <div id='KuahPau' className='ui vertical fixed icon menu'>
        <a className='item' onClick={this._onKuahPauClick}>
          <i className='sidebar icon'></i>
        </a>
      </div>
    );
  }

  _onKuahPauClick() {
    $('.ui.sidebar').sidebar('toggle');
  }
}

export default KuahPau;
