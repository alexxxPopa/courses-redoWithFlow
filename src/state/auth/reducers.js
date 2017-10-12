//@flow

import * as types from './types';
import { combineReducers } from 'redux';

type Action = {
  type: string,
  payload: any
}

const isAuthenticated = (state: boolean = false, action: Action) => {
  switch (action.type) {
    case types.LOG_IN:
      return action.payload;
    case types.LOG_OUT:
      return action.payload;
    default:
      return state;
  }
}

const error = (state= {}, action) => {
  switch (action.type) {
    case types.AUTH_ERROR:
      return action.payload;
    default:
      return state
  }
}

export default combineReducers({
  isAuthenticated: isAuthenticated
})
