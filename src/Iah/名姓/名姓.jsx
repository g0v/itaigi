import React from 'react';
import { Link, browserHistory } from 'react-router';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
import 後端 from '../../後端';
import './名姓.css';

import Debug from 'debug';
import { runInThisContext } from 'vm';
import HapSing from '../../GuanKiann/HuatIm/HapSing';

const superagent = require('superagent-promise')(require('superagent'), Promise);

const debug = Debug('itaigi:名姓');

class 名姓 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { Mia: '', Senn: '' };
    this.entry = true;
  }

  componentWillMount() {
    this.liah(this.props.params.senn, this.props.params.mia);
  }

  componentWillReceiveProps(nextProps) {
    this.liah(nextProps.params.senn, nextProps.params.mia);
  }

  show() {
    const show = !this.disabled();
    if (show) return true;

    if (!this.entry) {
      this.hapsing = false;
      return false;
    }

    this.entry = false;
    if (!!this.props.params.senn && !!this.props.params.mia) {
      this.hapsing = true;
      return true;
    }

    this.hapsing = false;
    return false;
  }

  disabled() {
    return !((this.senn && !!this.senn.value) && (this.mia && !!this.mia.value));
  }

  tsha(event) {
    event.preventDefault();
    browserHistory.replace(`/name/${this.senn.value}/${this.mia.value}`);
    debug(`${this.senn.value}/${this.mia.value}`);
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

  render() {
    return (
      <div className='mia main ui text container ui fluid action input container tshue"'>
        <form onSubmit={this.tsha.bind(this)}>
          <label htmlFor="senn" />
          <input
            className="miasenn"
            type="text"
            name="senn"
            placeholder="你的姓"
            defaultValue={this.props.params.senn}
            ref={(input) => this.senn = input}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <br />
          <label htmlFor="mia" />
          <input
            className="miasenn"
            type="text"
            name="mia"
            placeholder="你的名"
            defaultValue={this.props.params.mia}
            ref={(input) => this.mia = input}
            onChange={(e) => this.setState({ value: e.target.value })}
          />
          <br />
          <input
            type="submit"
            value="怎麼唸？"
            className="miasenn ui button teal"
            disabled={this.disabled()}
          />
        </form>
        {
        (this.show() && this.hapsing)
        && (
        <div className="mia main ui text container">
          <div className="name-ruby">
            <ruby>
              {this.props.params.senn}
              <rt>{this.state.Senn}</rt>
              {this.props.params.mia}
              <rt>{this.state.Mia}</rt>
            </ruby>
          </div>
          <div className="hapsing"><HapSing 音標={`${this.state.Senn} ${this.state.Mia}`} /></div>
        </div>
        )
      }
        <div className="main ui text container">
          <div className="siokausik">
            <hr className="tip-hr-name" />
            <strong>溫馨提醒：只能查姓名，否則可能會得到錯誤發音！</strong>
            <br />
            <br />
            <br />
            <h1 className="siokausik">💯台語小教室💯</h1>
            <br />
            <h2 className="siokausik">姓名發音通則：</h2>
            台語漢字常有多種發音，姓名發音通則為：姓用白話音、名用文讀音。
            <br />
            <br />
            <h2 className="siokausik">以上規則當然也有例外：</h2>
            <h3 className="siokausik">👉姓的特例</h3>
            例如「謝」姓有「Tsiā」、「Siā」兩種發音，各地腔調習慣不同，應該尊重名從主人的原則，以本人自己的發音為準。
            <br />
            也有少數習慣讀成文讀音的姓，像「林」讀「Lîm」不讀「Nâ」，「馬」通常讀「Má」不讀「Bé」等等。
            <br />
            另外也有一些文白讀翻轉的情形。舉例來說，「孫」姓原本通行白話音「Sng」，但民間有漸漸轉成文讀音「Sun」的趨勢。
            <br />
            <br />
            <h3 className="siokausik">👉名的特例</h3>
            名的部分，雖然一般會照字面用文讀音念，但有時父母長輩是用口語詞、白話音來取名。
            例如陳「水扁」是叫「Tsuí-pínn」而非文讀音「Suí-pián」，
            李「江却」是念「Kang-khioh」而不是「Kang-khiok」。有時候還會有「文+白」或「白+文」的組合。
            <br />
            <br />
            <h2 className="siokausik">因此……</h2>
            「姓用白話音、名用文讀音」只是大原則，不見得百分之百正確。例外的情況，有可能是臺語原本的習慣，或甚至是特定地區、家族或個人的發音，最好的方式還是向本人確認。
          </div>
        </div>
      </div>
    );
    debug(`${this.state.Senn} ${this.state.Mia}`);
  }
}

名姓.propTypes = {
  params: React.PropTypes.object,
  查怎樣講: React.PropTypes.func,
};

export default 名姓;
