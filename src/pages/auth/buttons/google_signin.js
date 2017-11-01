import React, { Component } from 'react';
import loadScript from '../../../services/utils';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as signinActions from '../../../modules/auth/signin';
import { reset } from 'redux-form';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';


var GoogleAuth ;
var SCOPE = 'https://www.googleapis.com/auth/userinfo.profile';

class GoogleSignin extends Component {

  onClick() {
    loadScript('https://apis.google.com/js/api.js', 'googleOAuth', ()=> {
      window.gapi.load('client:auth2', () => {
        window.gapi.client.init({
          'apiKey': 'GuBbTkvM8e1lRgKAk968qbJ4',
          'clientId': '711806237157-7ig2ac3qrtbem830r0jf5029uebfc6q4.apps.googleusercontent.com',
          'scope': SCOPE
        }).then( () => {
          GoogleAuth = window.gapi.auth2.getAuthInstance(); 
          GoogleAuth.signIn().then((response) => {
            this.props.googleSignin(response.w3.U3, 'google')
              .then(() => this.props.history.push('/myPage'))
          })   
      })
    })
  })
}

  render() {
    return (
      <button onClick={ () => this.onClick() }>Signin with google</button>
    )
  }
}

const bindActionsToDispatch = (dispatch) => ({
  googleSignin: (email, provider) => {
    dispatch(showLoading())
    const promise = dispatch(signinActions.externalSignin(email, provider))
    promise.then(() => dispatch(hideLoading()))
      .catch((error)=> {
        dispatch(signinActions.processSigninError(error))
        dispatch(reset('SigninForm'))
        dispatch(hideLoading())
      })
    return promise
  }
})

const BoundGoogleSignin = connect(null, bindActionsToDispatch)(GoogleSignin)

export default withRouter(BoundGoogleSignin)