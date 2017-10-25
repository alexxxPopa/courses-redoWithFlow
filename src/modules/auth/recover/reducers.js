
import react from 'react';
import * as types from './types'
import Immutable from 'immutable';

const initialState = Immutable.Map({
  recoverError: '',
})

const recover = (state= initialState, action) => {
  switch (action.type) {
    case types.RECOVER_ERROR: {
      return state.set('recoverError', action.payload)
    }
    default:
    return state
  }
}

export default recover;