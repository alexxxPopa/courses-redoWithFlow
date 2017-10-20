//@flow

import * as React from 'react';
import * as types from './types';
import auth from  '../../../services/auth_service';

type LoginParams= {
  email: string,
  password: string
}

export const signin = (values: LoginParams) => async dispatch =>{
  const { email, password } = values

  const response = await auth.signin(email, password)
  dispatch(successSignin(response))
}

export const signout = () => {
  return {
    type: types.SIGN_OUT
  }
}

const successSignin = (response) => {
  return {
    type: types.SIGN_IN
  }
}



