//@flow

import * as React from 'react';
import * as types from './types';
import auth from  '../../../services/auth_service';
import { receiveRequest, receiveResponse } from '../../utils';

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

export const checkSession = () => async dispatch => {
  dispatch(receiveRequest())
  let currentUser = auth.currentUser()

  currentUser.jwt().then(response => {
    dispatch (validSession())
    dispatch(receiveResponse())
  }).catch(err => {
    dispatch (invalidSession())
    dispatch (receiveResponse())
  })
}

const invalidSession = () => {
  return {
    type: types.INVALID_SESSION
  }
}

const validSession = () => {
  return {
    type: types.VALID_SESSION
  }
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

