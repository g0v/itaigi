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
    <div className='ui action input big container'>
      <input
        type='text'
        placeholder='A... 那個'
        defaultValue={this.props.defaultValue}
        onKeyDown={this.handleKeyDown.bind(this)}
        onKeyUp={this.handleKeyUp.bind(this)}
      />
      <div className="ui button big teal" onClick={this.handleSubmit.bind(this)}>台語怎麼講</div>
    </div>
    );
  }
}

export default Transmit.createContainer(Tshue, { query: {} });
