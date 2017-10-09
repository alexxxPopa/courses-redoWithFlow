//@flow

import * as types from './types';
import { combineReducers } from 'redux';

type Action = {
  type: string,
  payload: boolean
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

export default combineReducers({
  isAuthenticated: isAuthenticated
})
