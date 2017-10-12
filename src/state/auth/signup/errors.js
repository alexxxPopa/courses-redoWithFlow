import * as React from 'react';
import * as types from './types';
import { processErrorResponse } from '../../../enhancers' 

export const processError = (error) => dispatch =>  {
  const err =  processErrorResponse(error.response.data)
  dispatch(authError(err))
 } 
 
 export const authError = (error) => {
   return {
     type: types.AUTH_ERROR,
     payload: error
   }
 }