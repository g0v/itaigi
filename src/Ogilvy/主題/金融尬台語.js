import React from 'react';
import './金融尬台語.css';
import Debug from 'debug';
import 抱去摸三隻 from '../../Iah/主題/抱去摸三隻';
import 金融尬台語表 from './金融尬台語.json';

export default class 金融尬台語 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { 佗一隻: undefined, 揣: '' };
  }

  換一隻(名) {
    this.setState({ 佗一隻: 名 });
  }

  撈出寶貝() {
    const 表 = 金融尬台語表;
    const { 揣 } = this.state;
    const 顯示 = [];
    let 三隻 = [];

    表.map((一隻, i) => {
      if (一隻.includes(揣)) {
        三隻.push(一隻);
      }

      if (三隻.length === 3 || i === (表.length - 1)) {
        顯示.push(三隻);
        三隻 = [];
      }
    });

    const 寶貝鈕 = 顯示.map((三隻, i) => (
      <抱去摸三隻
        key={i}
        寶貝名={三隻}
        佗一隻={this.state.佗一隻}
        換一隻={this.換一隻.bind(this)}
      />
    ));
    return 寶貝鈕;
  }

  handleKeyDown(evt) {
    if (evt.keyCode === 13) {
      this.查寶貝();
    }
  }

  查寶貝() {
    const 揣 = this.refs.揣.value;
    if (揣 !== this.state.揣) {
      this.setState({ 揣 });
    }
  }

  render() {
    const 寶貝鈕 = this.撈出寶貝();
    return (
      <div className="main container">
        <div className="kong content 金融尬台語外口">
          <div className="ui fluid action input huge container tshue">
            <input
              type="text"
              placeholder="去槓桿化、投資報酬率"
              defaultValue=""
              onKeyDown={this.handleKeyDown.bind(this)}
              ref="揣"
              size="8"
            />
            <div className="ui button huge teal" onClick={this.查寶貝.bind(this)}>
              <i className="translate icon" />
              {' '}
              講台語
            </div>
          </div>
          {寶貝鈕}
        </div>
      </div>
    );
  }
}
