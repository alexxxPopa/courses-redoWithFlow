import React, {Component} from 'react';
import { injectStripe,CardElement } from 'react-stripe-elements';

class CheckoutForm extends Component {

  handleSubmit = (ev) => {
    ev.preventDefault();

    this.props.stripe.createToken()
      .then((payload) => console.log(payload))
  }

  render() {
    return (
      <form onSubmit = { this.handleSubmit }>
        <CardElement />
        <button>Confirm order</button>
      </form>
    )
  }
}

export default injectStripe(CheckoutForm)