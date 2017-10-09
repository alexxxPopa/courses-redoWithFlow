//@flow

import * as types from './types'; 


type AuthResponse = {
  type: string,
  payload: boolean
}

export function login() : AuthResponse {
  return {
    type: types.LOG_IN,
    payload: true
  }
}

export function logout() : AuthResponse {
  console.log('logging out')
  return {
    type: types.LOG_OUT,
    payload: false
  }
}
