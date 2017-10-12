
import * as React from 'react';
import RegisterForm from './register_form';
import { processErrorResponse } from '../../enhancers';
import * as actions from '../../state/session/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { SubmissionError } from 'redux-form'
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
    if (!_.isEmpty(this.props.error)){
     return (Object.values(this.props.error[0]))
    }
  }

  render() { 
    return (
      <div>
        <RegisterForm onSubmit={(values) => this.onSubmit(values)} />
        { this.renderServerError() }
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { error: state.session.error })

const bindActionsToDispatch = (dispatch) => ({
  register: (values) => { 
    dispatch(showLoading())
    const promise = dispatch(actions.register(values));
    promise.then(() => dispatch(hideLoading()))
    .catch((error => {
      dispatch(actions.processError(error))
      dispatch(hideLoading())
    }))
    return promise
    
  }
  })

const BoundRegister = connect(mapStateToProps, bindActionsToDispatch)(Register)

export default withRouter(BoundRegister);
