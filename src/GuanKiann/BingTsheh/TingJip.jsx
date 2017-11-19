import React from 'react';
import 後端 from '../../後端';

export default class TingJip extends React.Component {
  init() {
    window.fbAsyncInit = (function () {
      FB.init({
        appId: '590065061070994',
        xfbml: true,
        version: 'v2.5',
      });
    })(function (d, s, id) {

      var js;
      var fjs = d.getElementsByTagName(s)[0];
      if (d.getElementById(id)) { return; }

      js = d.createElement(s); js.id = id;
      js.src = 'https://connect.facebook.net/zh_TW/sdk.js';
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
    let { csrftoken } = this.props;
    let postForm = this.postForm;
    return function (response) {
      if (response.authResponse) {
        let data = {
          next: '',
          process: 'login',
          access_token: response.authResponse.accessToken,
          expires_in: response.authResponse.expiresIn,
          csrfmiddlewaretoken: csrftoken,
        };
        console.log(postForm);
        postForm(後端.登入token(), data);
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

TingJip.propTypes = {
    csrftoken: React.PropTypes.string,
  };
