import React from 'react';
import Transmit from 'react-transmit';
import Router from 'react-router';

import ToLam from '../GuanKiann/ToLam/ToLam';

class FBTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      href: '',
    };
  }

  /*
  componentDidMount() {
    var _this = this;
    window.fbAsyncInit = function () {
      FB.init({
        appId: '252264671778664',
        xfbml: true,
        version: 'v2.5',
      });

      FB.getLoginStatus(function (response) {
        FB.api('/ukauitaigi/feed', function (feed) {
          var postID = feed.data[0].id.split('_')[1];
          FB.api('/' + postID + '?fields=source', function (photo) {
            _this.getFacebookResponse(photo);
          });
        });
      });

    }.bind(this)

    ;(function (d, s, id) {
      var js;
      var fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}

      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }
  */

  renderFacebookResponse() {
    return (
    <div className='kong content'>
      <div className='ui segment'>
        <a href='//facebook.com/1730736483875375' target='_blank'>
          <img width='480px' style={{ maxWidth: '100%' }} src={
          'https://scontent-tpe1-1.xx.fbcdn.net/' +
          'v/t1.0-9/13434768_1730736483875375_4702703927351574930_n.png' +
          '?oh=ec6f238855669552423792b11c8b97b3&oe=58BC2443'}/>
        </a>
      </div>
    </div>
    );
  }

  getFacebookResponse(photo) {
    this.setState({ href: 'http://facebook.com/' + photo.id, src: photo.source });
  }

  render() {
    return (
      <div>
        <h3 className='ui horizontal divider header'>
          <i className='facebook square icon'></i>
          面冊
        </h3>
        <div className='container'>
          {this.renderFacebookResponse()}
        </div>
      </div>
    );
  }
}

export default Transmit.createContainer(FBTest, { queries: {} });
