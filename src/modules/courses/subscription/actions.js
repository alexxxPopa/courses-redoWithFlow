import * as React from 'react';
import * as types from './types';
import { showLoading, hideLoading } from 'react-redux-loading-bar';
import { receiveRequest, receiveResponse } from '../../utils';
import { goCourses } from '../../../services'


export const getPlans = () => async dispatch => {
  dispatch(showLoading())

  const response = goCourses.getPlans()
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

