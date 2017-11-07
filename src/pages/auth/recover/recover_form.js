import * as React from 'react';
import { Field, reduxForm } from 'redux-form';

type RecoverParams = {
  email: string
  //to be extended ,aswell as backend , so far just email is required
}

class RecoverForm extends React.Component<any> {

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
    const { handleSubmit, onSubmit } = this.props;
    return (
      <div>
        <form onSubmit={ handleSubmit(onSubmit.bind(this)) }>
          <Field
            label="Email"
            name="email"
            type="text"
            component={this.renderField}
          />
          <button type="submit">Recover</button>
        </form>
      </div>
    )
  }
}

function validate ( values: RecoverParams): mixed {
  let errors = {};

  if (!values.email) {
    errors.email = 'Required'
  } else if  (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = 'Invalid email address'
  }
  return errors;
}

export default reduxForm({
  validate,
  form: 'RecoverForm'
})(RecoverForm);