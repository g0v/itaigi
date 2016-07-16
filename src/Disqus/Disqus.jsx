import React from 'react';
import Transmit from 'react-transmit';
import ReactDisqusThread from 'react-disqus-thread';
import Debug from 'debug';

var debug = Debug('itaigi:Disqus');

class Disqus extends React.Component {

  render() {
    const { pathname } = this.props;
    var decode_path = decodeURI(pathname);
    debug('pathname: ' + pathname);
    debug('decode pathname: ' + decode_path);
    return (
      <ReactDisqusThread
        shortname='itaigi'
        identifier={decode_path}
        title={decode_path}
        url={'http://itaigi.tw' + decode_path}/>
    );
  }
}

export default Transmit.createContainer(Disqus, {
  queries: {
  },
});
