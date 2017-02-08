import React from 'react';
import Modal from 'react-modal';
import Promise from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);

import HuatIm from '../HuatIm/HuatIm';
import TuiIngHuaGi from '../Su/TuiIngHuaGi';

import Debug from 'debug';
var debug = Debug('itaigi:例句表');

export default class 例句表 extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      按呢講的外語列表: [],
    };
  }

  componentWillMount() {
    this.查按呢講的外語(this.props);
  }

  componentWillUpdate(nextProps, nextState) {
    if (nextProps != this.props)
    this.查按呢講的外語(nextProps);
  }

  查按呢講的外語(props) {
    let { 後端網址, 漢字, 台羅 } = props;
    const 看例句 = 漢字 && 台羅;
    if (看例句) {
      this.setState({ 按呢講的外語列表: [] });
      superagent.get(encodeURI(後端網址 + '平臺項目列表/揣按呢講列表?關鍵字=' + 漢字))
        .then(({ body }) => this.setState({ 按呢講的外語列表: body.列表 }))
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
    let 按呢講的外語 = this.state.按呢講的外語列表.map((外語, i)=>(<TuiIngHuaGi key={i} 外語={外語}/>));
    return (
        <Modal
          isOpen={看例句}
          onRequestClose={this.props.關例句.bind(this)}
          style={customStyles}
          >
          <h2 ref="subtitle">{漢字} {台羅}</h2>
          <HuatIm 音標={台羅} />
          華語：
          <span className='ui horizontal list large'>
            {按呢講的外語}
          </span>
          <div>
            <div>
              事情辦得很妥善。<br/>
              代誌做了真四序。<br/>
              Tāi-tsì tsò-liáu tsin sù-sī. <br/>
            </div>
            <div>
              事情辦得很妥善。<br/>
              代誌做了真四序。<br/>
              Tāi-tsì tsò-liáu tsin sù-sī. <br/>
            </div>
            <div>
              事情辦得很妥善。<br/>
              代誌做了真四序。<br/>
              Tāi-tsì tsò-liáu tsin sù-sī. <br/>
            </div>
          </div>
          <button
            onClick={this.props.關例句.bind(this)}
            className="ui button"
            >我知影矣</button>
        </Modal>
    );
  }
}

