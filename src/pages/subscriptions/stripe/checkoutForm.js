import React, {Component} from 'react';
import { injectStripe,CardElement } from 'react-stripe-elements';

class CheckoutForm extends Component {

  constructor(props) {
    super(props)
      this.state = {
        submitDisabled: false,
        paymentError: null,
        paymentComplete: false
      }
  }

  handleSubmit = (ev) => {
    ev.preventDefault();
    this.setState({submitDisabled: true, paymentError: null})
    this.props.stripe.createToken()
      .then((response) => {
        if (response.error){
          this.setState({paymentError: response.error.message, submitDisabled: false})
        }else {
          this.closePopup()
        }})
      
  }
  
  closePopup = () => this.props.closePopup()  

  render() {
    return (
      <div>
        <form onSubmit = { this.handleSubmit }>
          <CardElement />
          <button>Confirm order</button>
        </form>
        <button onClick = { this.closePopup }>Close</button>
      </div>

    )
  }
}

export default injectStripe(CheckoutForm)