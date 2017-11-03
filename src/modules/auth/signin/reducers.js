import react from 'react';
import * as types from './types'
import Immutable from 'immutable';

const initialState = Immutable.Map({
  signinError: '',
  isAuthenticated: false,
  email: ''
})

const signin = (state=initialState, action) => {
  switch (action.type) {
    case types.SIGNIN_ERROR: {
      return state.set('signinError', action.payload) 
    }
    case types.SIGN_IN: {
      return state.set('isAuthenticated', true).set('email', action.payload.email)
    }
    case types.SIGN_OUT: {
      return state.set('isAuthenticated', false)
    }
    case types.VALID_SESSION: {
      return state.set('isAuthenticated', true).set('email', action.payload.email)
    }
    case types.INVALID_SESSION: {
      return state.set('signinError', 'you must log in')
    }
    default:
      return state
  }
}

export default signin;