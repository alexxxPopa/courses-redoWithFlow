import react from 'react';
import * as types from './types'
import { combineReducers } from 'redux';

const signinError = (state={}, action) => {
  switch (action.type) {
    case types.SIGNIN_ERROR:
      return action.payload;
    default:
      return state
  }
}

export default combineReducers({
  signinError
})