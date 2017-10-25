import * as React from 'react';
import * as types from './types';
import auth from '../../../services/auth_service';
import * as errors from '../utils/actions'

type RecoverParams = {
  email: string
} 

export const recoverPassword = (values: RecoverParams) => async dispatch =>  {
  const { email } = values
  await auth.requestPasswordRecovery(email)
}

export const handleRecoverError = (error) => dispatch =>  {
  if (error.data === undefined || error.data.message === undefined) {
    dispatch(errors.networkError(types.RECOVER_ERROR))
  } else {
    dispatch(errors.serverError(error.data.message, types.RECOVER_ERROR))
    }   
}