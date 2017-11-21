//@flow

import * as React from 'react';
import * as types from './types';
import { auth } from  '../../../services';

type RegisterParams = {
  email: string,
  password: string,
  password_confirmation: string
}

export const signup = (values: RegisterParams) => async dispatch => {
  const { email, password, password_confirmation } = values
  await auth.signup(email, password, password_confirmation) 
}


