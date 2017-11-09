import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlans } from '../../modules/courses/subscription'

class plansIndex extends Component {

  componentDidMount() {
    this.props.get_subscriptions()
  }

  renderPlans() {
    return this.props.plans.map( (plan) => {
      return (
        <li key = {plan.id}>
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
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  // console.log(state.courses.subscription.get('plans'))
  return {plans : state.courses.subscription.get('plans')}
}

const bindActionsToDispatch = (dispatch) => ({
  get_subscriptions: () => {
    dispatch(getPlans())
  }
})

export default connect(mapStateToProps, bindActionsToDispatch)(plansIndex)