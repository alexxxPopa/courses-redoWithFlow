import React from 'react';
import { Link } from 'react-router-dom';


const recoverButton = () => {
  return (
    <Link to="/recover"><button>Forgot password</button></Link>
  )
}

export default recoverButton