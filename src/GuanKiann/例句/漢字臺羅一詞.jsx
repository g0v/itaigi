import React from 'react';
import Debug from 'debug';
import './漢字臺羅一詞.css';

const debug = Debug('itaigi:漢字臺羅一詞');

export default function 漢字臺羅一詞() {
  return (
    <ruby>
      {this.props.臺羅}
      <rt>{this.props.漢字}</rt>
    </ruby>
  );
}
