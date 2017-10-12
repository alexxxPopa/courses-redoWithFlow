import * as React from 'react';
import * as types from './types';
import { processErrorResponse } from '../../../enhancers' 

export const processSignupError = (error) => dispatch =>  {
  const err =  processErrorResponse(error.response.data)
  dispatch(signupError(err))
 } 
 
const signupError = (error) => {
   return {
     type: types.SIGNUP_ERROR,
     payload: error
   }
 }