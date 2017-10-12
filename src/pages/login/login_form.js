//@flow

import * as React from 'react';
import { Button, Icon, Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { AppTemplate } from '../../layouts';
import { connect } from 'react-redux';

type LoginParams = {
  email: string,
  password: string,
}

class Signin extends React.Component<any> {
  renderField(field): React.Node {
    const { meta: { touched, error } } = field;

    return (
      <div>
        <input
          type={field.type}
          placeholder={field.label}
          {...field.input}
        />
        {touched &&
        ((error && <span>{error}</span>))}
      </div>
    );
  }

  render() {
    const { handleSubmit } = this.props;
    return (
        <div>
          <form onSubmit={ handleSubmit(this.props.onSubmit.bind(this)) }>
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
            <button type="submit">Login</button>
          </form>
          <div>
            <Button color='facebook'>
              <Icon name='facebook' />
              Log in with Facebook
          </Button>
            <Button color='google plus'>
              <Icon name='google plus' />
              Log in with Google
          </Button>
          </div>
        </div>
    );
  }
}

function validate(values: LoginParams): mixed {
  let errors = {};

  if (!values.email) {
    errors.email = 'Required'
  } else if  (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email addresssssss'
  }
  if (!values.password) {
    errors.password = 'Required';
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'SigninForm'
})(Signin);
