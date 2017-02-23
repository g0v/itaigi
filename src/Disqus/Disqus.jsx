import React from 'react';
import ReactDisqusComments from 'react-disqus-comments';
import Debug from 'debug';

var debug = Debug('itaigi:Disqus');

export default class Disqus extends React.Component {

  render() {
    const { pathname } = this.props;
    var decode_path = decodeURI(pathname);
    // debug('pathname: ' + pathname);
    // debug('decode pathname: ' + decode_path);
    return (
      <ReactDisqusComments
        shortname='itaigi'
        identifier={decode_path}
        title={decode_path}
        url={'http://itaigi.tw' + decode_path}/>
    );
  }
}
