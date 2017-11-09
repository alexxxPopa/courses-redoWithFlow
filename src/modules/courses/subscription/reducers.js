import react from 'react';
import * as types from './types';
import Immutable from 'immutable';

const initialState = Immutable.Map ({
  plans: []
})

const subscriptions = (state = initialState, action) => {
  switch(action.type) {
    case types.GET_PLANS: {
      return state.set('plans', action.payload)
    }
    default: 
      return state
  }
}

export default subscriptions;