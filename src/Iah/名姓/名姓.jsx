import React from 'react';
import { Link } from 'react-router';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
import 後端 from '../../後端';
import './名姓.css';
import { browserHistory } from 'react-router';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import HapSing from '../../GuanKiann/HuatIm/HapSing';

import Debug from 'debug';
import { runInThisContext } from 'vm';
var debug = Debug('itaigi:名姓');

class 名姓 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Mia: '', Senn: '' };
  }

  componentWillMount() {
    this.liah(this.props.params.senn, this.props.params.mia);
  }

  componentWillReceiveProps(nextProps) {
    this.liah(nextProps.params.senn, nextProps.params.mia);
  }

  render() {
    return (
    <div className='mia main ui text container ui fluid action input container tshue"'>
        <form onSubmit={this.tsha.bind(this)}>
          <label htmlFor="senn" ></label>
          <input type="text" name="senn" placeholder='你的姓'
          defaultValue={this.props.params.senn} ref={ input => this.senn = input }
          onChange={e => this.setState({ value: e.target.value })}
          /><br/>
          <label htmlFor="mia"></label>
          <input type="text" name="mia" placeholder='你的名'
          defaultValue={this.props.params.mia} ref={ input => this.mia = input }
          onChange={e => this.setState({ value: e.target.value })}
          /><br/>
          <input type="submit" value="怎麼唸？" className='ui button teal' disabled={!this.sow()}/>
        </form>
        {
          (this.sow() && this.hapsing) &&
          <div className='mia main ui text container'>
            <ruby>
              {this.props.params.senn} <rt> {this.state.Senn} </rt>
              {this.props.params.mia} <rt> {this.state.Mia} </rt>
            </ruby>
            <div className="hapsing"><HapSing 音標={this.state.Senn + ' ' + this.state.Mia}/></div>
          </div>
        }
      </div>
    );
    debug(this.state.Senn + ' ' + this.state.Mia);
  }

  sow() {
    const show = (this.senn && !!this.senn.value) || (this.mia && !!this.mia.value);
    if (!show)
        this.hapsing = false;
    return show;
  }

  tsha(event) {
    event.preventDefault();
    browserHistory.replace('/name/' + this.senn.value + '/' +  this.mia.value);
    debug(this.senn.value + '/' + this.mia.value);
    this.hapsing = true;
  }

  liah(senn, mia) {
    if (senn != undefined && mia != undefined) {
      debug(senn, mia);
      superagent.get(後端.名姓(senn, mia))
      .then(({ body }) => this.setState(body))
      .catch((err) => debug('error'));
    }
  }
}

名姓.propTypes = {
  params: React.PropTypes.object,
  查怎樣講: React.PropTypes.func,
};

export default  名姓;
