import * as React from 'react';
import * as types from './types';
import { processErrorResponse } from '../../../pages/enhancers'
import * as errors from '../utils/actions'; 

export const processSignupError = (error) => dispatch =>  {
  if (error.data === undefined) {
    dispatch(errors.networkError(types.SIGNUP_ERROR))
  } else {
    let err = Object.values(processErrorResponse(error.data)[0])  
    dispatch(errors.serverError(err[0], types.SIGNUP_ERROR))
  }
}