
import * as React from 'react';
import RegisterForm from './register_form';
import { processErrorResponse } from '../../enhancers';
import * as actions from '../../state/session/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';
import { SubmissionError } from 'redux-form'

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
    this.props.register(values)
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        <RegisterForm onSubmit={(values) => this.onSubmit(values)} />
      </div>
    )
  }
}

// const mapStateToProps = (state) => (
//   { error: state.session.error })

const bindActionsToDispatch = (dispatch) => ({
  register: (values) => { 

    const promise = dispatch(actions.register(values));

    promise.then(() => {
      return promise;
    }).catch(() => {
    })

    throw new SubmissionError({
      email: "asdfadsf",
      _error: 'Register failed!'
  })


  //   throw new SubmissionError({
  //     email: "asdfadsf",
  //     _error: 'Register failed!'
  // })

    // const promise = dispatch(actions.register(values));

    // promise.catch()

    //  promise.catch((error) => {
    //    console.log("catch");
    //    return processErrorResponse(error.response.data)
    // })
    // return promise;
  }
}
)

const BoundRegister = connect(null, bindActionsToDispatch)(Register)

export default withRouter(BoundRegister);
