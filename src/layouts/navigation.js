//@flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';

const navigation = (): React.Node => (
  <div>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/login">Log In</Link></li>
      </ul>
      <SearchBar />
    </div>
  </div>
)

export default navigation;