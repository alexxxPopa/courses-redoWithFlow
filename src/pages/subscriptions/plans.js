import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlans } from '../../modules/courses/subscription';
import Checkout from './stripe/checkout';

class plansIndex extends Component {

  constructor() {
    super()
    this.state = {
      showPopup: false
    };
  }

  togglePopup = () =>  {
    console.log('nonom')
    this.setState({
      showPopup: !this.state.showPopup
    });
  }

  componentDidMount() {
    this.props.getSubscriptions()
  }



  renderPlans() {
    return this.props.plans.map( (plan) => {
      return (
        <li key = { plan.Title }
            onClick = { this.togglePopup}>
          { plan.Title } 
        </li>
      )
    })
  }

  render() {
    return (
      <div>
        <ul>
          { this.renderPlans() }
        </ul>
        { this.state.showPopup ?
         <Checkout 
          closePopup={this.togglePopup} 
          /> : null }
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  plans : state.courses.subscription.get('plans')
})

const bindActionsToDispatch = (dispatch) => ({
  getSubscriptions: () => {
    dispatch(getPlans())
  }
})

export default connect(mapStateToProps, bindActionsToDispatch)(plansIndex)