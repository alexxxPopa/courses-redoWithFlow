// @flow

import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { AppTemplate } from '../../layouts';

type RegisterParams = {
  email: string,
  password: string,
  repeatPassword: string
}

class RegisterForm extends React.Component<any> {

  renderField(field): React.Node {
    const { meta: { touched, error } } = field;

    return (
      <div>
        <label>{field.label}</label>
        <input
          type={field.type}
          {...field.input}
        />
        <span className="text-help">
          {touched ? error : ''}
        </span>
      </div>
    );
  }

  renderServerError(error) {
    <div>
      { error }
    </div>
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <AppTemplate>
        <div>
          <form onSubmit={handleSubmit(this.props.onSubmit.bind(this))}>
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
          </form>
        </div>
        { this.renderServerError(this.props.error)}
      </AppTemplate>
    )
  }
}



function validate(values: RegisterParams): any {
  let errors = {};

  if (!values.email) {
    errors.email = "Enter an email!";
  }
  if (!values.password) {
    errors.password = "Enter a password!";
  }
  if (!values.repeatPassword) {
    errors.repeatPassword = "Enter password repeat!";
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'RegisterForm'
})(RegisterForm);