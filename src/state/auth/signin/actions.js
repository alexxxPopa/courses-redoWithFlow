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

export const signout = () => async dispatch => {
  let currentUser = auth.currentUser()

  await currentUser.signout()
  dispatch(successSignout())
}

const successSignin = (response) => {
  return {
    type: types.SIGN_IN
  }
}

const successSignout = () => {
  return {
    type: types.SIGN_OUT
  }
}

