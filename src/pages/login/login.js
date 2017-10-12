//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import * as signinActions from '../../state/auth/signin';
import SigninForm from './login_form';
import { withRouter } from 'react-router';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import _ from 'lodash';

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
    if (!_.isEmpty(this.props.error)){
     return this.props.error
     }
  }

  render() {
    return (
      <div>
      <SigninForm onSubmit={ (values) => this.onSubmit(values) } />
      { this.renderServerError() }
      </div>
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
        dispatch(hideLoading())
      })
    return promise
    } 
  })

const mapStateToProps = (state) => (
  { error: state.auth.signin.signinError})

const BoundLogin = connect(mapStateToProps, bindActionsToDispatch)(Login)

export default withRouter(BoundLogin);