import React from 'react';
import Debug from 'debug';

var debug = Debug('itaigi:LaiLik');

export default class LaiLik extends React.Component {
  render() {
    return (
    <div className='content'>
      出處：
      {this.props.貢獻者}
    </div>
    );
  }
}
