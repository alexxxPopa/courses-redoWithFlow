import React, { Component } from 'react';
import loadScript from '../../../services/utils';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import * as signinActions from '../../../modules/auth/signin';
import { reset } from 'redux-form';
import { withRouter } from 'react-router';
import { connect } from 'react-redux';

class FacebookSignin extends Component {

  componentDidMount() {
    loadScript('https://connect.facebook.net/en_US/sdk.js', 'facebookOAuth', () => {
      window.FB.init({
        appId: '261559787686151',
        autoLogAppEvents: true,
        status: true,
        xfbml: true, 
        version: 'v2.10'
      })
    })
  }

  onClick() {
    window.FB.login((response) => {
       if (response.authResponse && response.status === 'connected') {
        window.FB.api('/me', {fields: 'email'}, (response)=> {
          this.props.facebookSignin(response.email, 'facebook')
            .then( () => this.props.history.push('myPage'))
        })
      }  
  }, {scope: 'public_profile, email'})
}

  render() {
    return (
      <button onClick={ () => this.onClick() }>Signin with facebook</button>
    )
  }
}

const bindActionsToDispatch = (dispatch) => ({
  facebookSignin: (email, provider) => {
    dispatch(showLoading())
    const promise = dispatch(signinActions.externalSignin(email, provider))
    promise.then(() => dispatch(hideLoading()))
          .catch((error) => {
            dispatch(signinActions.processSigninError(error))
            dispatch(reset('SigninForm'))
            dispatch(hideLoading())
          })
      return promise;    
  }
})

const BoundFacebookSignin = connect(null, bindActionsToDispatch)(FacebookSignin)

export default withRouter(BoundFacebookSignin)