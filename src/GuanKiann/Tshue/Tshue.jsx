import React from 'react';
import Router from 'react-router';
import Transmit from 'react-transmit';
import Debug from 'debug';
var debug = Debug('itaigi:Tshue');

class Tshue extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      外語: this.props.外語 || '',
      紀錄: [],
    };
  }

  componentWillReceiveProps(nextProps) {
    let { 紀錄 } = this.state;
    let { 外語 } = nextProps;
    let 所在 = 紀錄.indexOf(外語);
    if (所在 == -1) {
      紀錄 = [];
      this.setState({ 紀錄 });
      if (外語 == undefined) {
        外語 = '';
      }
      this.refs.Tshue.value = 外語;
    } else {
      紀錄 = 紀錄.splice(0, 所在 + 1);
      this.setState({ 紀錄 });
    }
  }

  handleKeyDown(evt) {
    if (evt.keyCode === 13) {
      this.查怎樣講(evt);
      return;
    }
  }

  查怎樣講(evt) {
    if (this.state.外語 !== '') {
      this.props.查怎樣講(this.state.外語);
    }
  }

  componentWillMount() {
    this.timer = setInterval(this.sensorThinkTime.bind(this), 2000);
  }

  componentWillUnmount() {
    clearInterval(this.timer);
  }

  sensorThinkTime() {
    let 外語 = this.refs.Tshue.value;
    if (外語 !== this.state.外語) {
      let { 紀錄 } = this.state;
      紀錄.push(外語);
      this.setState({ 外語, 紀錄 });
      this.查怎樣講.bind(this)();
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
