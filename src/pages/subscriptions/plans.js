import React, { Component } from 'react';
import { connect } from 'react-redux';
import { getPlans } from '../../modules/courses/subscription'

class plansIndex extends Component {

  componentDidMount() {
    this.props.getSubscriptions()
  }

  renderPlans() {
    console.log(this.props.plans)
    return this.props.plans.map( (plan) => {
      return (
        <li key = { plan.Title }>
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

const mapStateToProps = (state) => ({
  plans : state.courses.subscription.get('plans')
})

const bindActionsToDispatch = (dispatch) => ({
  getSubscriptions: () => {
    dispatch(getPlans())
  }
})

export default connect(mapStateToProps, bindActionsToDispatch)(plansIndex)