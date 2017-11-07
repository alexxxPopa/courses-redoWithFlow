import * as React from 'react';
import * as types from 'types';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import axios from 'axios';

export const retrievePlans = () => async dispatch => {

  const response = await axios.get(types.ROOT_URL);
  console.log(response)
}