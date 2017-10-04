//@flow

import * as React from 'react';
import { Button, Icon, Form } from 'semantic-ui-react';
import { Field, reduxForm } from 'redux-form';
import { AppTemplate } from '../layouts';

type LoginParams = {
  email: string,
  password: string,
}

class LoginForm extends React.Component<any> {
  renderField(field): React.Node {
    const { meta: { touched, error } } = field;

    return (
      <Form.Field>
        <Form.Input
          label={field.label}
          placeholder={field.label}
          type={field.type}
          {...field.input}
        />
        <div className="text-help">
          {touched ? error : ''}
        </div>
      </Form.Field>
    );
  }

  onSubmit(values: LoginParams): void {
    console.log(values)
    //call to backend for login--> if all validation succed route to a welcome page
  }

  render() {
    const { handleSubmit } = this.props;
    return (
      <AppTemplate>
        <div>
          <Form onSubmit={handleSubmit(this.onSubmit.bind(this))}>
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
            <Button type="submit">Submit</Button>
          </Form>
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
      </AppTemplate>
    );
  }
}

export default reduxForm({
  form: 'LoginForm'
})(LoginForm);
