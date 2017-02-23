import React from 'react';
import { Promise } from 'bluebird';
var superagent = require('superagent-promise')(require('superagent'), Promise);
import debug from 'debug';
import SangTshut from './SangTshut';
import 後端 from '../../後端';

export default class KiuKongHuat extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      modalIsOpen: false,
    };
  }

  問外語(evt) {
    var 外語內容 = {
      '外語資料': this.props.華語關鍵字,
    };
    superagent.post(後端.加外語())
      .withCredentials()
      .set('Content-Type', 'application/x-www-form-urlencoded')
      .set('X-CSRFToken', this.props.csrftoken)
      .send(外語內容)
      .then(({ body }) => (this.openModal()))
      .catch(res => {
        console.log(res);
      });
  }

  openModal() {
    this.setState({ modalIsOpen: true });
  }

  closeModal() {
    this.setState({ modalIsOpen: false });
  }

  render() {
    let { 華語關鍵字 } = this.props;
    return (
      <div>
        <h3 className='ui horizontal divider header'>
          <i className='cloud upload icon'></i>
          我想欲知影按怎講
        </h3>
        <button className='ui button large olive' onClick={this.問外語.bind(this)}>
          <i className='student icon'></i>
          求講法
        </button>
        <SangTshut modalIsOpen={this.state.modalIsOpen}
          closeModal={this.closeModal.bind(this)}/>
      </div>
      );
  }
}

KiuKongHuat.propTypes = {
  華語關鍵字: React.PropTypes.string,
  csrftoken: React.PropTypes.string,
};
