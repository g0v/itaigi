import React from 'react';
import './複製連結鍵.css';

export default class 複製連結鍵 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCopying: false };
  }

  handleClick() {
    this.setState({ isCopying: true });

    let textField = document.createElement('textarea');
    textField.innerText = decodeURIComponent(window.location.href);
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    let clock = setTimeout(()=> {
        this.setState({ isCopying: false });
      }, 1000);
  }

  render() {
    return (
      <span>
        <button
          onClick={this.handleClick.bind(this)}
          className='複製連結' title='複製連結' >
          <i className='icon linkify'></i>
        </button>
        { this.state.isCopying &&
          <span><small>連結已複製，可轉貼分享</small></span>
        }
      </span>
    );
  }
}
