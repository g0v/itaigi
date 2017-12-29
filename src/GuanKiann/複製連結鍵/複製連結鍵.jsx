import React from 'react';

export default class 複製連結鍵 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { isCopying: false };
  }

  handleClick() {
    this.setState({ isCopying: true });

    var textField = document.createElement('textarea');
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
      <span className=''>
        <button
          onClick={this.handleClick.bind(this)}
          className='' title='複製連結' style={{position:'absolute', left: 100, height: 21, width: 68.66}} >
          <i className='icon linkify'></i>
        </button>
        { this.state.isCopying &&
          <span><small>連結已複製，可轉貼分享</small></span>
        }
      </span>
    );
  }
}
