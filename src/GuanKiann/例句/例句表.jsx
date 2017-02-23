import React from 'react';
import Modal from 'react-modal';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);

import 後端 from '../../App/後端';
import HuatIm from '../HuatIm/HuatIm';
import TuiIngHuaGi from '../Su/TuiIngHuaGi';
import 顯示例句一句 from './顯示例句一句';

import Debug from 'debug';
var debug = Debug('itaigi:例句表');

export default class 例句表 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      按呢講的外語列表: [],
      例句列表: [],
    };
  }

  componentWillMount() {
    this.查按呢講的外語(this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps != this.props) {
      this.查按呢講的外語(nextProps);
    }
  }

  查按呢講的外語(props) {
    let { 漢字, 台羅 } = props;
    const 看例句 = 漢字 && 台羅;
    if (看例句) {
      this.setState({ 按呢講的外語列表: [] });
      superagent.get(後端.揣按呢講列表(漢字, 台羅))
        .then(({ body }) => this.setState({ 按呢講的外語列表: body.列表 }))
        .catch((err) => console.log(err));

      this.setState({ 例句列表: [] });
      superagent.get(後端.例句列表(漢字, 台羅))
        .then(({ body }) => this.setState({ 例句列表: body.例句 }))
        .catch((err) => console.log(err));
    }
  }

  render() {
    const customStyles = {
      overlay: {
        zIndex: '200',
      },
    };
    let { 漢字, 台羅 } = this.props;
    const 看例句 = 漢字 && 台羅;
    // debug(例句, this.state);
    let 按呢講的外語 = this.state.按呢講的外語列表.map((外語, i)=>(<TuiIngHuaGi key={i} 外語={外語}/>));
    let 例句 = this.state.例句列表.map((例句, i)=>(
      <顯示例句一句 key={i} 第幾句={i + 1} 例句={例句}/>
    ));
    return (
        <Modal
          contentLabel="例句表"
          isOpen={看例句}
          onRequestClose={this.props.關例句.bind(this)}
          style={customStyles}
          >
          <h2 ref="subtitle">{漢字} {台羅} <HuatIm 音標={台羅}/></h2>

          華語：
          <span className='ui horizontal list large'>
            {按呢講的外語}
          </span>
          <div className="ui celled list">
            {例句}
          </div>
          <button
            onClick={this.props.關例句.bind(this)}
            className="ui button"
            >我知影矣</button>
        </Modal>
    );
  }
}

