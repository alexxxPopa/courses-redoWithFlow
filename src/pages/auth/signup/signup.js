
import * as React from 'react';
import SignupForm from './signup_form';
import { processErrorResponse } from '../../enhancers';
import * as signupActions from '../../../modules/auth/signup';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import _ from 'lodash';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

type Props = {
  register: (values: RegisterParams) => void,
  error: any
}

type RegisterParams = {
  email: string,
  password: string,
  password_confirmation: string
}

class Register extends React.Component<Props> {

  onSubmit(values) {
    this.props.register(values).then(() =>  this.props.history.push('/'))
  }

  renderServerError() {
    if (!_.isEmpty(this.props.signupError)){
     return (Object.values(this.props.signupError[0]))
    }
  }

  render() { 
    return (
      <div>
        <SignupForm onSubmit={(values) => this.onSubmit(values)} />
        { this.renderServerError() }
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { signupError: state.auth.signup.get('signupError') })

const bindActionsToDispatch = (dispatch) => ({
  register: (values) => { 
    dispatch(showLoading())
    const promise = dispatch(signupActions.signup(values))
    promise.then(() => dispatch(hideLoading()))
    .catch((error) => {
      dispatch(signupActions.processSignupError(error))
      dispatch(hideLoading())
    })
    return promise
  }
  })

const BoundRegister = connect(mapStateToProps, bindActionsToDispatch)(Register)

export default withRouter(BoundRegister);
