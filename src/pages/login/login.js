//@flow
import * as React from 'react';
import { connect } from 'react-redux';
import * as actions from '../../state/session/actions';
import LoginForm from './login_form';
import { withRouter } from 'react-router';

type Props = {
  login: () => boolean
}

class Login extends React.Component<any> {

  onSubmit() {
    this.props.login()
    // this.props.history.push('/')
  }

  render() {
    return (
      <LoginForm onSubmit={ () => this.onSubmit() } />
    )
  }
}

const bindActionsToDispatch = (dispatch) => (
  { login: () => { dispatch(actions.login())} }
)

const mapStateToProps = (state) => (
  { isAuthenticated: state.session.isAuthenticated }
)

export default connect(mapStateToProps, bindActionsToDispatch)(Login)