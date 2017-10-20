import * as React from 'react';
import * as types from './types';

export const processSigninError = (error) => dispatch => {
  dispatch(signinError(error.data.message))
}

const signinError = (error) => {
  return {
    type: types.SIGNIN_ERROR,
    payload: error
  }
}