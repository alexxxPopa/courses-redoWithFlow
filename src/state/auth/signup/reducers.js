import react from 'react';
import * as types from './types';
import Immutable from 'immutable';

const initialState = Immutable.Map({
  signupError:''
})

const signup = (state= initialState, action) => {
  switch (action.type) {
    case types.SIGNUP_ERROR:
      return state.set('signupError', action.payload)
    default:
      return state
  }
}

export default signup;