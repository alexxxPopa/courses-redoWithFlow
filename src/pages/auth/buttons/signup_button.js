import React from 'react';
import { Link } from 'react-router-dom';

const registerButton = (isAuthenticated) => {
  if (!isAuthenticated.isAuthenticated) {
    return(
    <Link to = './register'>
      <button>Register</button>
    </Link>
  )
  }
}

export default registerButton