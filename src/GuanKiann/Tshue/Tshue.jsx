import React from 'react';
import Router from 'react-router';
import Transmit from 'react-transmit';

class Tshue extends React.Component {
  // Tshue should be only one cause the id.
  constructor(props) {
    super(props);
    this.state = {
      q: this.props.defaultValue || '',
    };
    this.查過的詞 = new Set();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultValue === this.props.defaultValue) return;
    let { defaultValue } = nextProps;
    if (this.查過的詞.has(defaultValue)) {
      this.查過的詞.delete(defaultValue);
    } else if (defaultValue === undefined) {
      this.refs.Tshue.value = '';
      this.setState({ q: '' });
    } else {
      this.refs.Tshue.value = defaultValue;
      this.setState({ q: defaultValue });
    }
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
    let q = this.refs.Tshue.value;
    if (q !== this.state.q && q.length > 1) {
      this.setState({ q });
      this.查過的詞.add(q);
      this.查怎樣講();
    }
  }

  render() {
    return (
    <div className='ui fluid action input huge container'>
      <input
        type='text'
        placeholder='輸入華語，點一下「台語怎麼講」'
        defaultValue={this.props.defaultValue}
        onKeyDown={this.handleKeyDown.bind(this)}
        ref='Tshue'
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
