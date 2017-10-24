import * as React from 'react';
import * as types from './types';
import auth from '../../../services/auth_service';

const errorMessage = 'Oops, we have a problem';

type RecoverParams = {
  email: string
} 

export const recoverPassword = (values: RecoverParams) => async dispatch =>  {
  const { email } = values

  const response = await auth.requestPasswordRecovery(email)
}

export const handleRecoverError = (error) => dispatch =>  {
  if (error.data === undefined || error.data.message === undefined) {
    dispatch(networkError())
  } else {
    dispatch(serverError(error))
  }   
}

const serverError = (error) => {
  return {
    type: types.RECOVER_ERROR,
    payload: error.data.message
  }
}

const networkError = () => {
  return {
    type: types.RECOVER_ERROR,
    payload: errorMessage
  }
}
