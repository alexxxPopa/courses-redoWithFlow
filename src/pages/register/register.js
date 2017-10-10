//@flow

import * as React from 'react';
import RegisterForm from './register_form';
import * as actions from '../../state/session/actions';
import { connect } from 'react-redux';
import { withRouter } from 'react-router';

type Props = {
  register: (values) => void
}

class Register extends React.Component<Props> {

  onSubmit(values) {
    this.props.register(values)
  }

  renderServerError() {
    return (
    Object.keys(this.props.error).map((key) => (
        <div key = {key}>{this.props.error[key][0]}</div>
      ))
    );
  }

  render() {
    return (
      <div>
        <RegisterForm onSubmit={(values) => this.onSubmit(values)} />
        {this.renderServerError()}
      </div>
    )
  }
}

const mapStateToProps = (state) => (
  { error: state.session.error })

const bindActionsToDispatch = (dispatch) => (
  { register: (values) => { dispatch(actions.register(values)) } }
)

const BoundRegister = connect(mapStateToProps, bindActionsToDispatch)(Register)

export default withRouter(BoundRegister);
