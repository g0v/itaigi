import React from 'react';
import Transmit from 'react-transmit';
import ReactDisqusThread from 'react-disqus-thread';

class Disqus extends React.Component {

  render() {
    const { pathname } = this.props.location;
    return (
      <ReactDisqusThread
        shortname='itaigi'
        title={pathname}
        url={'http://itaigi.tw' + pathname}/>
    );
    }
}

export default Transmit.createContainer(Disqus, {
  queries: {
  },
});
