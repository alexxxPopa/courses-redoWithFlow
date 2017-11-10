import * as React from 'react';
import * as types from './types';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { receiveRequest, receiveResponse } from '../../utils';
import axios from 'axios';

export const getPlans = () => async dispatch => {
  dispatch(showLoading())

  const response = await axios.get(types.ROOT_URL);
  dispatch(successGetPlans(response))
  dispatch(hideLoading())
}

export const subscribe = () => async dispatch => {
  dispatch(showLoading())
}

const successGetPlans = (response) => {
  return {
    type: types.GET_PLANS,
    payload: response.data
  }
}

