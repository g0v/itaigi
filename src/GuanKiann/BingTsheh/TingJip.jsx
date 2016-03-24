import React from 'react';

export default class TingJip extends React.Component {
  propTypes = {
    後端網址: React.PropTypes.string,
    csrftoken: React.PropTypes.string,
  };
  init() {
    window.fbAsyncInit = (function() {
      FB.init({
        appId: '590065061070994',
        xfbml: true,
        version: 'v2.5',
      });
    })(function(d, s, id) {

      var js;
      var fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }

      js = d.createElement(s); js.id = id;
      js.src = 'http://connect.facebook.net/zh_TW/sdk.js';
      fjs.parentNode.insertBefore(js, fjs);
    }(document, 'script', 'facebook-jssdk'));
  }

  postForm(action, data) {
    console.log(action);
    var f = document.createElement('form');
    f.method = 'POST';
    f.action = action;

    for (var key in data) {
      var d = document.createElement('input');
      d.type = 'hidden';
      d.name = key;
      d.value = data[key];
      f.appendChild(d);
    }

    document.body.appendChild(f);
    f.submit();
  }

  loginFB(evt) {
    FB.login(this.getLoginCallback(), { scope: 'email' });
  }

  getLoginCallback(response) {
    console.log(this.props);
    let { 後端網址, csrftoken } = this.props;
    let postForm = this.postForm;
    return function(response) {
      if (response.authResponse) {
        let data = {
          next: '',
          process: 'login',
          access_token: response.authResponse.accessToken,
          expires_in: response.authResponse.expiresIn,
          csrfmiddlewaretoken: csrftoken,
        };
        console.log(postForm);
        postForm(後端網址 + 'accounts/facebook/login/token/', data);
      } else if (response && response.status &&
          ['not_authorized', 'unknown'].indexOf(response.status) > -1) {
        console.log('self.onLoginCanceled.call(self, response);');
      } else {
        console.log('self.onLoginError.call(self, response);');
      }
    };
  }

  render() {
    this.init();
    console.log('csrftoken');
    return (
    <div className='ui segment'>
      <textarea></textarea>
      <button onClick={this.loginFB.bind(this)}>
        送出sui2
      </button>
    </div>
    );
  }
}
