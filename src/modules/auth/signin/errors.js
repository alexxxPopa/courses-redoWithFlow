import * as React from 'react';
import * as types from './types';
import * as errors from '../../utils';

export const processSigninError = (error) => dispatch => {
  if (error.data === undefined || error.data.message === undefined) {
    dispatch(errors.networkError(types.SIGNIN_ERROR))
  } else {
    dispatch(errors.serverError(error.data.message, types.SIGNIN_ERROR))
    }
}