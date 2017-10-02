//@flow

import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';

type Props = {
  children: React.Node
}

export default ({ children }: Props) => (
  <div>
    <SearchBar />
    <ul>
      <li> <Link to="/">Home</Link></li>
      <li> <Link to="/register">Register</Link></li>
      <li> <Link to="/login">Log In</Link></li>
    </ul>
    { children }
  </div>
 );