import React from 'react';
import Transmit from 'react-transmit';
import Router from 'react-router';

import ToLam from '../GuanKiann/ToLam/ToLam';

class FBTest extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      status: '',
      name_album: '',
      str: '',
    };
  }

  componentDidMount() {
    var _this = this;
    window.fbAsyncInit = function () {
      FB.init({
        appId: '612719925532636',
        xfbml: true,
        version: 'v2.5',
      });

      FB.api({
        method: 'fql.query',
        query: 'SELECT object_id, name FROM album WHERE owner="1661026360846388"',
      },
        function (albums) {
          if (albums && !albums.error) {
            var images = [];
            var name_album = albums[0].name;
            FB.api({
              method: 'fql.query',
              query: 'SELECT object_id, src_big FROM photo WHERE album_object_id=' + albums[0].object_id,
            },
              function (photos) {
                photos.forEach(function (item) {
                  item.name_album = name_album;
                  return item;
                });

                _this.getFacebookResponse(photos);
              });
          } else {
            _this.getFacebookResponse.bind(_this);
          }

        }.bind(_this)
      );
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

  renderFacebookResponse() {
    return (
    <div className='kong content'>
      <div className='ui segment'>
        <h3>Facebook Image ({this.state.name_album})</h3>
        <img src={this.state.src} />
      </div>
    </div>
    );
  }

  getFacebookResponse(photo) {
    if (photo && !photo.error) {
      this.setState({ status: 'right' });
      this.setState({ name_album: photo[0].name_album });
      this.setState({ src: photo[0].src_big });
    } else {
      console.log(response);
      this.setState({ status: 'fail' });
      this.setState({ name_album: 'Error' });
      this.setState({ str: JSON.stringify(response) });
    }

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
