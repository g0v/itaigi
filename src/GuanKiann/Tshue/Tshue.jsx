import React from 'react';
import './Tshue.css';
import Debug from 'debug';
import { gaTshue } from '../../GA';
var debug = Debug('itaigi:Tshue');

export default class Tshue extends React.Component {
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
    let q = this.refs.Tshue.value;
    if (q !== this.state.q) {
      this.setState({ q });
      this.查過的詞.add(q);
      this.props.查怎樣講(q);
      gaTshue(q);
    }
  }

  render() {
    return (
    <div className='ui fluid action input huge container tshue'>
      <input
        type='text'
        placeholder='輸入華語，按下「講台語」'
        defaultValue={this.props.defaultValue}
        onKeyDown={this.handleKeyDown.bind(this)}
        ref='Tshue'
        size="8"
      />
      <div className='ui button huge teal'
        onClick={this.查怎樣講.bind(this)}>
        <i className='translate icon'></i>
        講台語
      </div>
    </div>
    );
  }
}
