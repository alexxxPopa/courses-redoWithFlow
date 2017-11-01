import React, { Component } from 'react';
import loadScript from '../../../services/utils';

class FacebookSignin extends Component {

  onClick() {
    loadScript('https://connect.facebook.net/es_LA/sdk.js', 'facebookOAuth', () => {
      window.FB.init({
        appId: 'todo',
        autoLogAppEvents: true,
        xfbml: true, 
        version: 'v2.9'
      })
      console.log(1213123)
    })
  }

  render() {
    return (
      <button onClick={ () => this.onClick() }>Signin with facebook</button>
    )
  }
}

export default FacebookSignin