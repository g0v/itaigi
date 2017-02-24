import React from 'react';
import Modal from 'react-modal';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
import 後端 from '../../後端';
import HuatIm from '../HuatIm/HuatIm';
import TuiIngHuaGi from '../Su/TuiIngHuaGi';
import 顯示例句一句 from './顯示例句一句';
import 無例句 from './無例句';
import Debug from 'debug';

var superagent = require('superagent-promise')(require('superagent'), Promise);

var debug = Debug('itaigi:例句表');

class 例句表 extends React.Component {

  constructor(props) {
    super(props);
    // this.state = {
    //   按呢講的外語列表: [],
    //   例句列表: undefined,
    // };
  }

  // componentWillMount() {
  //   this.查按呢講的外語(this.props);
  // }

  // componentWillUpdate(nextProps, nextState) {
  //   if (nextProps != this.props) {
  //     this.查按呢講的外語(nextProps);
  //   }
  // }

  //  查按呢講的外語(props) {
  //   let { 漢字, 台羅 } = props;
  //   const 看例句 = 漢字 && 台羅;
  //   if (看例句) {
  //     this.setState({ 按呢講的外語列表: [] });
  //     superagent.get(後端.揣按呢講列表(漢字, 台羅))
  //       .then(({ body }) => this.setState({ 按呢講的外語列表: body.列表 }))
  //       .catch((err) => console.log(err));

  //     this.setState({ 例句列表: [] });
  //     superagent.get(後端.例句列表(漢字, 台羅))
  //       .then(({ body }) => this.setState({ 例句列表: body.例句 }))
  //       .catch((err) => console.log(err));
  //   }
  // }

  render() {
    const customStyles = {
      overlay: {
        zIndex: '200',
      },
    };
    let { 漢字, 台羅 } = this.props;
    const 看例句 = !!(漢字 && 台羅);

    let 按呢講的外語 = this.props.按呢講的外語列表.map((外語, i)=>(<TuiIngHuaGi key={i} 外語={外語}/>));
    let 例句 = this.props.例句列表.map((例句, i)=>(
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
          <div className="ui very relaxed divided list">
            {
              例句.length ? 例句 : <無例句/>
            }
          </div>
          <button
            onClick={this.props.關例句.bind(this)}
            className="ui button"
            >我知影矣</button>
        </Modal>
    );
  }
}

export default Transmit.createContainer(例句表, {
  initialVariables: {},
  fragments: {
    按呢講的外語列表({ 漢字, 台羅 }) {
      if (漢字 && 台羅) {
        return superagent.get(後端.揣按呢講列表(漢字, 台羅))
            .then(({ body }) => body.列表)
            .catch((err) => console.log(err));
      }

      return Promise.resolve([]);
    },

    例句列表({ 漢字, 台羅 }) {
      if (漢字 && 台羅) {
        return superagent.get(後端.例句列表(漢字, 台羅))
        .then(({ body }) => body.例句)
        .catch((err) => console.log(err));
      }

      return Promise.resolve([]);
    },
  },
});
