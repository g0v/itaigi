import React from 'react';
import Router from 'react-router';
import Transmit from 'react-transmit';
import Debug from 'debug';
var debug = Debug('itaigi:Tshue');

class Tshue extends React.Component {
  // Tshue should be only one cause the id.
  constructor(props) {
    super(props);
    this.state = {
      q: this.props.q || '',
    };
  }

  handleKeyDown(evt) {
    if (evt.keyCode === 13) {
      this.查怎樣講(evt);
      return;
    }
  }

  查怎樣講(evt) {
    if (this.state.q !== '') {
      this.props.查怎樣講(this.state.q);
    }
  }

  componentWillMount() {
    this.timer = setInterval(this.sensorThinkTime.bind(this), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  sensorThinkTime() {
    var q = document.querySelector('#Tshue').value;
    if (q !== this.state.q) {
      this.setState({ q });
      this.查怎樣講.bind(this)();
    }
  }

  render() {
    debug(this.state.q,this.props.q)
    return (
    <div className='ui fluid action input huge container'>
      <input
        type='text'
        placeholder='輸入華語，點一下「台語怎麼講」'
        defaultValue={this.props.defaultValue}
        onKeyDown={this.handleKeyDown.bind(this)}
        id='Tshue'
      />
      <div className='ui button huge teal'
        onClick={this.查怎樣講.bind(this)}>
        <i className='translate icon'></i>
        台語怎麼講
      </div>
    </div>
    );
  }
}

export default Transmit.createContainer(Tshue, { query: {} });
