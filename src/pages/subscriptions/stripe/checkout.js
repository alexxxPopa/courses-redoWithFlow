import React, {Component} from 'react';
import { Elements } from 'react-stripe-elements';
import CheckoutForm from './checkoutForm';

class Checkout extends Component {
  render() {
    return (
      <Elements>
        <CheckoutForm closePopup = { this.props.closePopup }/>     
      </Elements>   
    )
  }
}

export default Checkout