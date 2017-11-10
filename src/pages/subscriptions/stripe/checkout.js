import React, {Component} from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './checkoutForm';

class Checkout extends Component {
  render() {
    return (
      <Elements>
        <CheckoutForm />
        <button onClick = {this.props.closePopup}>
          Close
        </button>
      </Elements>   
    )
  }
}

export default Checkout