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
  await axios.post(types.ROOT_URL, body)
}

