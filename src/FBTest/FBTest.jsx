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
        <a href='http://facebook.com/1730736483875375' target='_blank'>
          <img src={'https://scontent.xx.fbcdn.net/' +
          'v/t1.0-9/s720x720/' +
          '13434768_1730736483875375_4702703927351574930_n.png' +
          '?oh=970a6acf9fda12a7d67ac7182148e27f&oe=5828FB3D'}/>
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
    <div className='main container'>
      {this.renderFacebookResponse()}
    </div>
    );
  }
}

export default Transmit.createContainer(FBTest, { queries: {} });
