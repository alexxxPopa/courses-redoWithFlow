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

export {
  serverError,
  networkError
}