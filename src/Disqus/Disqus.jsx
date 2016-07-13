import React from 'react';
import Transmit from 'react-transmit';
import ReactDisqusThread from 'react-disqus-thread';
import Debug from 'debug';

var debug = Debug('itaigi:Disqus');

class Disqus extends React.Component {

  render() {
    const { pathname } = this.props.location;
    debug('pathname: ' + pathname);
    debug('decode pathname: ' + decodeURI(pathname));
    return (
      <ReactDisqusThread
        shortname='itaigi'
        title={decodeURI(pathname)}
        url={'http://itaigi.tw' + decodeURI(pathname)}/>
    );
    }
}

export default Transmit.createContainer(Disqus, {
  queries: {
  },
});
