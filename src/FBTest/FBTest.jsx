import React from 'react';
import Transmit from 'react-transmit';
import Router from 'react-router';

import ToLam from '../GuanKiann/ToLam/ToLam';

class FBTest extends React.Component {

  componentDidMount() {
    var _this = this;
    window.fbAsyncInit = function() {
      FB.init({
        appId: '252264671778664',
        xfbml: true,
        version: 'v2.5',
      });

      FB.getLoginStatus(function(response){
        FB.api('/ukauitaigi/feed',function(feed){
          var postID=feed.data[0].id.split('_')[1];
          FB.api('/'+postID+'?fields=source',function(photo){
            _this.getFacebookResponse(photo);
          });
        });
      });

    }.bind(this)

    ;(function(d, s, id) {
      var js;
      var fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) {return;}

      js = d.createElement(s); js.id = id;
      js.src = '//connect.facebook.net/en_US/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  renderFacebookResponse() {
    return (
    <div className='kong content'>
      <div className='ui segment'>
        <h3>Facebook Image</h3>
        <a href={this.state.href}><img src={this.state.src} /></a>
      </div>
    </div>
    );
  }

  getFacebookResponse(photo) {
    this.setState({href:'http://facebook.com/'+photo.id,src:photo.source});
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
