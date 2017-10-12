import * as React from 'react';
import * as types from './types';
import { combineReducers } from 'redux';

const error = (state= {}, action) => {
  switch (action.type) {
    case types.AUTH_ERROR:
      return action.payload;
    default:
      return state
  }
}

export default combineReducers({
  registerError: error
})