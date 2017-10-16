//@flow

import * as React from 'react';
import axios from 'axios';
import * as types from './types';

type LoginParams= {
  email: string,
  password: string
}

export const signin = (values: LoginParams) => async dispatch =>{
  const body = Object.assign(values, {grant_type: 'password'})
  const response =  await axios.post(types.ROOT_URL, body)
  dispatch(successSignin(response))
}

export const signout = () => {
  localStorage.removeItem('token')
  return {
    type: types.SIGN_OUT
  }
}

const successSignin = (response) => {
  localStorage.setItem('token', response.data.token)
  return {
    type: types.SIGN_IN
  }
}



