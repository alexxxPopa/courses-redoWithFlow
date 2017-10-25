//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import * as signinActions from '../../../modules/auth/signin';
import RecoverButton from '../buttons/button-recover';
import SigninForm from './signin_form';
import { withRouter } from 'react-router';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { reset } from 'redux-form'
import _ from 'lodash';
import AppTemplate from '../../components/app';

type Props = {
  login: () => boolean
}

type LoginParams = {
  email: string,
  password: string,
}

class Login extends React.Component<any> {

  onSubmit(values) {
    this.props.signin(values).then(() => this.props.history.push('/myPage'))
  }

  renderServerError() {
    if (!_.isEmpty(this.props.signinError)){
     return this.props.signinError
     }
  }

  render() {
    return (
      <AppTemplate>
        <div>
          <SigninForm onSubmit={ (values) => this.onSubmit(values) } />
          <RecoverButton />
          { this.renderServerError() }
        </div>
      </ AppTemplate>
    )
  }
}

const bindActionsToDispatch = (dispatch) => ({
   signin: (values) => {
    dispatch(showLoading())
    const promise = dispatch(signinActions.signin(values))
    promise.then(() => dispatch(hideLoading()))
      .catch((error) => {
        dispatch(signinActions.processSigninError(error))
        dispatch(reset('SigninForm'))
        dispatch(hideLoading())
      })
    return promise
    } 
  })

const mapStateToProps = (state) => (
  { signinError: state.auth.signin.get('signinError')})

const BoundLogin = connect(mapStateToProps, bindActionsToDispatch)(Login)

export default withRouter(BoundLogin);