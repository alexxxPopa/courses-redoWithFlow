//@flow

import * as types from './types';
import axios from 'axios';


type AuthResponse = {
  type: string,
  payload: boolean
}

type RegisterResponse = {
  error: string
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

export function register(values: RegisterParams) {
  return async function (dispatch) {
    let response;
    try {
      response = await axios.post(`${types.ROOT_URL}/users`, values)
    } catch(err) {
      response = err.response
    }
    if (response.status >= 200 && response.status < 300) {

    } else {
        dispatch(authError(response.data))
    }
  }
}

export function authError(error) {
  return {
    type: types.AUTH_ERROR,
    payload: error
  }
}
