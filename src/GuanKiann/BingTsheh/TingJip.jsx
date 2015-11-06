
import React from 'react'
import Transmit from 'react-transmit'
import superagent from 'superagent-bluebird-promise'

class TingJip extends React.Component {
  componentWillMount () { this.props.setQueryParams(this.props) }
  componentWillReceiveProps (nextProps) {
    if (nextProps.後端網址 === this.props.後端網址) return
    this.props.setQueryParams(nextProps)
  }
  
  init () {
  
	  window.fbAsyncInit = function() {
	    FB.init({
	      appId      : '590065061070994',
	      xfbml      : true,
	      version    : 'v2.5'
	    });
	  };
	  (function(d, s, id){
	     var js, fjs = d.getElementsByTagName(s)[0];
	     if (d.getElementById(id)) {return;}
	     js = d.createElement(s); js.id = id;
	     js.src = "http://connect.facebook.net/zh_TW/sdk.js";
	     fjs.parentNode.insertBefore(js, fjs);
	   }(document, 'script', 'facebook-jssdk'))
  }
	   
	   
	loginFB(evt) {
	    FB.login(function (response) {
	        if (response.authResponse) {
	            FB.api('/me', function(response) {
	               document.getElementById('fb-me').innerHTML = JSON.stringify(response);
	             });
	            //onLoginSuccess(response, nextUrl);
	        } else if (response && response.status 
	                   && ["not_authorized", "unknown"].indexOf(response.status) > -1) {
	            console.log("self.onLoginCanceled.call(self, response);");
	        } else {
	            console.log("self.onLoginError.call(self, response);");
	        }
	    }, {scope: "email"});
	}
	   
  render () {
	  this.init()
    console.log('csrftoken')
    return (
        <div className='ui segment'>
        
        
          <a title="Facebook"  
             href="javascript:allauth.facebook.login('', 'authenticate', 'login')">Facebook</a>
           <textarea></textarea>

           <button
           onClick={this.loginFB.bind(this)}
           >送出sui2</button>           
        </div>
      )
  }
}

export default Transmit.createContainer(TingJip, {
  queries: {
    csrftoken ({後端網址}) {
      return superagent.get(後端網址 + 'csrf/看')
		.withCredentials()
        .then((body) => body['csrftoken'])
    },
    fbLoginCode ({後端網址}) {
      return superagent.get(後端網址 + 'FB登入SDK')
		.withCredentials()
        .then((body) => body.text.trim())
    }
  }
})
