//@flow

import * as types from './types';
import axios from 'axios';
import { withRouter } from 'react-router';
import { processErrorResponse } from '../../enhancers' 

type AuthResponse = {
  type: string,
  payload: boolean
}


type RegisterParams = {
  email: string,
  password: string,
  password_confirmation: string
}

export function login(): AuthResponse {
  return {
    type: types.LOG_IN,
    payload: true
  }
}

export function logout(): AuthResponse {
  return {
    type: types.LOG_OUT,
    payload: false
  }
}

// export const register = (values: RegisterParams) => async dispatch => {
//   await  axios.post(`${types.ROOT_URL}/users`, values) 
// }

// export const processError = (error) => dispatch =>  {
//  const err =  processErrorResponse(error.response.data)
//  dispatch(authError(err))
// } 

// export function authError(error) {
//   return {
//     type: types.AUTH_ERROR,
//     payload: error
//   }
// }
