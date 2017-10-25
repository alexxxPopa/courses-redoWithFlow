import * as types from './types';
import { showLoading, hideLoading } from 'react-redux-loading-bar';

const errorMessage = 'Oops, we have a network problem';

const serverError = (error, type) => {
  return {
    type: type,
    payload: error
  }
}

const networkError = (type) => {
  return {
    type: type,
    payload: errorMessage
  }
}

const receiveRequest = () => dispatch =>  {
  dispatch(showLoading())
  dispatch(request())
}

const request = () => {
  return {
    type: types.RECEIVE_REQUEST
  }
}

const receiveResponse = () => dispatch => {
  dispatch (response())
  dispatch(hideLoading())
}

const response = () => {
  return {
    type: types.RECEIVE_RESPONSE
  }
}

export {
  serverError,
  networkError,
  receiveRequest,
  receiveResponse
}