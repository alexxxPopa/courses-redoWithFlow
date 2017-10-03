// @flow

import * as React from 'react';
import { Field, reduxForm } from 'redux-form';
import Layout from './header/layout';

type ValidationValues = {
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
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </div>
    );
  }

  onSubmit(values: ValidationValues): void {
    console.log(values)
    //call to backend for registration--> if all validation succed route to a welcome page
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <Layout>
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
      </Layout>
    )
  }
}

function validate(values: ValidationValues): any {
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
})(RegisterForm)