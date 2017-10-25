import Immutable from 'immutable';
import * as types from './types';

const initialState = Immutable.Map({
  isLoading: false
})

const utils = (state= initialState, action) => {
  switch (action.type) {
    case types.RECEIVE_REQUEST: {
      return state.set('isLoading', true)
    }
    case types.RECEIVE_RESPONSE: {
      return state.set('isLoading', false)
    }
  default: 
    return state
  }
}

export default utils;