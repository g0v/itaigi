import React from 'react';

export default class 複製連結鍵 extends React.Component {

  handleClick() {
    var textField = document.createElement('textarea');
    textField.innerText = decodeURIComponent(window.location.href);
    document.body.appendChild(textField);
    textField.select();
    document.execCommand('copy');
    textField.remove();
    alert('連結已複製，趕緊轉貼分享吧！');
  }

  render() {
    return (
      <span className=''>
        <button
          onClick={this.handleClick}
          className='ui compact icon button' title='複製連結'>
          <i className='icon linkify'></i>
        </button>
      </span>
    );
  }
}
