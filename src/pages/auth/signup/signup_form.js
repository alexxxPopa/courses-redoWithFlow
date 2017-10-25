// @flow

import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { AppTemplate } from '../../components';
import _ from 'lodash';

type RegisterParams = {
  email: string,
  password: string,
  repeatPassword: string
}

class SignupForm extends React.Component<any> {

  renderField(field): React.Node {
    const { err, meta: { touched, error } } = field;

    return (
      <div>
        <input
          type={field.type}
          placeholder={field.label}
          {...field.input}
        />
        <span className="text-help">
          {touched ? error : ''}
        </span>
      </div>
    );
  }

  render() {
    const { handleSubmit, error, onSubmit } = this.props;
    return (
      <AppTemplate>
        <div>
          <form onSubmit={handleSubmit(onSubmit.bind(this))}>
            <Field
              label="Email"
              name="email"
              type="text"
              component={this.renderField}
            />
            <Field
              label="Password"
              name="password"
              type="password"
              component={this.renderField}
            />
            <Field
              label="Repeat Password"
              name="password_confirmation"
              type="password"
              component={this.renderField}
            />
            <button type="submit">Submit</button>
            {error && <strong>{error}</strong>}
          </form>
        </div>
      </AppTemplate>
    )
  }
}



function validate(values: RegisterParams): mixed {
  let errors = {};

  if (!values.email) {
    errors.email = 'Required';
  } 
  if (!values.password) {
    errors.password = 'Required';
  }
  if (!values.password_confirmation) {
    errors.password_confirmation = 'Required';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'SignupForm'
})(SignupForm);