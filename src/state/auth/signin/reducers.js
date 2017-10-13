import react from 'react';
import * as types from './types'
import Immutable from 'immutable';

const initialState = Immutable.Map({
  signinError: '',
  isAuthenticated: false
})

const signin = (state=initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_ERROR: {
      return state.set('signinError', action.payload) 
    }
    case types.SIGN_IN: {
      console.log("sadasdasda")
      return state.set('isAuthenticated', true)
    }
    default:
      return state
  }
}

export default signin;