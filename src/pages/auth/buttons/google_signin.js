import React, { Component } from 'react';
import loadScript from '../../../services/utils';

var GoogleAuth ;
var SCOPE = 'https://www.googleapis.com/auth/userinfo.profile';

class GoogleSignin extends Component {

  onClick() {
    loadScript('https://apis.google.com/js/api.js', 'googleOAuth', ()=> {
      window.gapi.load('client:auth2', initClient)
    })
  }

  render() {
    return (
      <button onClick={ () => this.onClick() }>Signin with google</button>
    )
  }
}

function initClient() {
  window.gapi.client.init({
    'apiKey': 'GuBbTkvM8e1lRgKAk968qbJ4',
    'redirect_uri': 'http://localhost:8080/token',
    'clientId': '711806237157-7ig2ac3qrtbem830r0jf5029uebfc6q4.apps.googleusercontent.com',
    'scope': SCOPE
  }).then(function() {
    GoogleAuth = window.gapi.auth2.getAuthInstance();
    if (GoogleAuth.currentUser.get().hasGrantedScopes(SCOPE)){
      GoogleAuth.disconnect()
      return;
    }
   GoogleAuth.signIn().then(e => {
    console.log(e)
   })
  })
}

export default GoogleSignin