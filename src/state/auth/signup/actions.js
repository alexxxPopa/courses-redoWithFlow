import * as React from 'react';
import * as types from './types';
import axios from 'axios';

export const register = (values: RegisterParams) => async dispatch => {
  await  axios.post(`${types.ROOT_URL}/users`, values) 
}


