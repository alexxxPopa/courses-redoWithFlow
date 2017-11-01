//@flow

import * as React from 'react';
import * as types from './types';
import auth from  '../../../services/auth_service';
import { receiveRequest, receiveResponse } from '../../utils';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

type LoginParams= {
  email: string,
  password: string
}

export const signin = (values: LoginParams) => async dispatch =>{
  const { email, password } = values

  const response = await auth.signin(email, password)
  dispatch(successSignin(response))
}

export const externalSignin = (email: string, provider: string) => async dispatch =>{
  const response = await auth.externalSignin(email, provider)
  
  dispatch(successSignin(response))
}

export const signout = () => async dispatch => {
  dispatch(showLoading())
  let currentUser = auth.currentUser()
  await currentUser.signout()
  dispatch(successSignout())
  dispatch(hideLoading())
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

