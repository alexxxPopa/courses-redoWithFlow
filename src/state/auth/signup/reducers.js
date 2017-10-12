import react from 'react';
import * as types from './types';
import { combineReducers } from 'redux';

const signupError = (state= {}, action) => {
  switch (action.type) {
    case types.SIGNUP_ERROR:
      return action.payload
    default:
      return state
  }
}

export default combineReducers({
  signupError
})