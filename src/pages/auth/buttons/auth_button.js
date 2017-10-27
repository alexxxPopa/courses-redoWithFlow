import React from 'react';
import { Link } from 'react-router-dom';

const authButton = (props) => {
  if (props.isAuthenticated) {
    return <Link to="/"><button onClick = { () => props.signout() }>Sign Out</button></Link> 
  }
  return <Link to="/login"><button>Sign in</button></Link>
}

export default authButton