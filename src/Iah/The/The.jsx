import React from 'react';
import 顯示選單 from './顯示選單';
import 顯示一個問題 from './顯示一個問題';
import './The.css';

export default class The extends React.Component {
  render() {
    if (!this.props.params.k) {
      let 排序 = this.props.location.query.order == 'new' ? 'new' : 'hot';
      return (
        <顯示選單
          pathname={this.props.location.pathname}
          csrftoken={this.props.csrftoken}
          排序={排序}
          欲提供講法={this.props.欲提供講法.bind(this)}/>
        );
    } else {
      return (
        <顯示一個問題
          華語關鍵字={this.props.params.k}
          pathname={this.props.location.pathname}
          csrftoken={this.props.csrftoken}
          編號={this.props.編號}
          漢字={this.props.location.query.漢字}
          音標={this.props.location.query.音標}/>
      );
    }
  }
}

The.propTypes = {
    params: React.PropTypes.object,
  };

