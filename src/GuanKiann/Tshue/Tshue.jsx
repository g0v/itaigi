import React from 'react';
import Router from 'react-router';
import Transmit from 'react-transmit';

class Tshue extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      q: this.props.q || '',
    };
  }

  handleKeyDown(evt) {
    if (evt.keyCode === 13 || this.state.q.length >= 2) {
      this.handleSubmit(evt);
      return;
    }
  }

  handleKeyUp(evt) {
    var q = evt.target.value;
    this.setState({ q });
  }

  handleSubmit(evt) {
    if (this.state.q !== '') {
      this.props.handleSubmit(this.state.q);
    }
  }

  render() {
    return (
    <div className='search ui action input container'>
      <input
    type='text'
    placeholder='A... 那個'
    defaultValue={this.props.defaultValue}
    onKeyDown={this.handleKeyDown.bind(this)}
    onKeyUp={this.handleKeyUp.bind(this)} />
      <button className='ui teal button' onClick={this.handleSubmit.bind(this)}>
        台語怎樣講&nbsp;&nbsp;<i className="fa fa-search fa-1x"></i>
      </button>
    </div>
    );
  }
}

export default Transmit.createContainer(Tshue, { query: {} });
