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
    <div className='ui action input huge container'>
      <input
        type='text'
        placeholder='輸入華語，點一下「台語怎麼講」'
        defaultValue={this.props.defaultValue}
        onKeyDown={this.handleKeyDown.bind(this)}
        onKeyUp={this.handleKeyUp.bind(this)}
      />
      <div className='ui button huge teal'
        onClick={this.handleSubmit.bind(this)}>
        <i className='translate icon'></i>
        台語怎麼講
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(Tshue, { query: {} });
