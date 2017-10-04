// @flow

import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import { AppTemplate } from '../layouts';
import * as Const from '../modules/constants';
import axios from 'axios';

type RegisterParams = {
  name: string,
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
          type="text"
          {...field.input}
        />
        <span className="text-help">
          {touched ? error : ''}
        </span>
      </div>
    );
  }

  onSubmit(values: RegisterParams): void {
    console.log(values)
  
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <AppTemplate>
        <div>
          <form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
            <Field
              label="Name"
              name="name"
              component={this.renderField}
            />
            <Field
              label="Email"
              name="email"
              component={this.renderField}
            />
            <Field
              label="Password"
              name="password"
              component={this.renderField}
            />
            <Field
              label="Repeat Password"
              name="repeatPassword"
              component={this.renderField}
            />
            <button type="submit">Submit</button>
          </form>
        </div>
      </AppTemplate>
    )
  }
}



function validate(values: RegisterParams): any {
  let errors = {};

  if (!values.name) {
    errors.name = "Enter a name!";
  }
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