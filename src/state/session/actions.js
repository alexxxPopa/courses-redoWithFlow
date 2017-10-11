//@flow

import * as types from './types';
import axios from 'axios';
import { withRouter } from 'react-router';


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

// export function register(values: RegisterParams) {
//   return async function (dispatch) {
//    const promise = await axios.post(`${types.ROOT_URL}/users`, values)
//    return promise;
//   }
// }

export const register = (values: RegisterParams) => async dispatch =>
  await axios.post(`${types.ROOT_URL}/users`, values);

export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
  }
}
