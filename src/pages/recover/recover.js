
import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { connect } from 'react-redux';
import RecoverForm from './recover_form';
import { withRouter } from 'react-router';
import { reset } from 'redux-form'
import { recoverPassword, handleRecoverError } from '../../state/auth/recover';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import AppTemplate from '../../layouts/app'
import _ from 'lodash';


class Recover extends React.Component<any> {

  onSubmit(values) {
    this.props.recover(values).then(() => this.props.history.push('/'))
  }

  renderServerError() {
    if (!_.isEmpty(this.props.recoverError)){
     return this.props.recoverError
     }
  }

  render() {
    return (
        <AppTemplate>
          <RecoverForm onSubmit={ (values) => this.onSubmit(values) } />
          { this.renderServerError() }
        </ AppTemplate>
    )
  }

}

const bindActionsToDispatch = (dispatch) => ({
  recover: (values) => {
    dispatch(showLoading())
    const promise = dispatch(recoverPassword(values))
    promise.then(() => dispatch(hideLoading()))
      .catch((error) => {
        dispatch(handleRecoverError(error))
        dispatch(reset('RecoverForm'))
        dispatch(hideLoading())
      })
    return promise
  }
})

const mapStateToProps = (state) => {
 return { recoverError: state.auth.recover.get('recoverError') }
}

const BoundRecover = connect(mapStateToProps, bindActionsToDispatch)(Recover)
export default withRouter(BoundRecover)

//export default withRouter(connect(mapStateToProps, bindActionsToDispatch)(Recover));