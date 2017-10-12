//@flow

import * as React from 'react';
import * as types from './types';
import axios from 'axios';

type RegisterParams = {
  email: string,
  password: string,
  password_confirmation: string
}

export const signup = (values: RegisterParams) => async dispatch => {
  await  axios.post(`${types.ROOT_URL}/users`, values) 
}


