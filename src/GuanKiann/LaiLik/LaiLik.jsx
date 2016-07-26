import React from 'react';
import Transmit from 'react-transmit';
import Promise from 'bluebird';
import Debug from 'debug';

var debug = Debug('itaigi:LaiLik');

class LaiLik extends React.Component {
  render() {
    return (
    <div className='content'>
      貢獻者：
      {this.props.貢獻者}
    </div>
    );
  }
}

export default Transmit.createContainer(LaiLik, {
  queries: {
  },
});
