import * as React from 'react';
import * as types from './types';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { receiveRequest, receiveResponse } from '../../utils';
import axios from 'axios';

export const getPlans = () => async dispatch => {
  dispatch(receiveRequest())

  const response = await axios.get(types.ROOT_URL);
  dispatch(successGetPlans(response))
  dispatch(receiveResponse())
}

const successGetPlans = (response) => {
  return {
    type: types.GET_PLANS,
    payload: response.data
  }
}

