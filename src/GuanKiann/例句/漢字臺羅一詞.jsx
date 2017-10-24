import React from 'react';
import Debug from 'debug';
import './漢字臺羅一詞.css';

var debug = Debug('itaigi:漢字臺羅一詞');

export default class 漢字臺羅一詞 extends React.Component {

  render() {
    return (
      <ruby>
        {this.props.臺羅}
        <rt>{this.props.漢字}</rt>
      </ruby>
    );
  }
}
