//@flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';
import { connect } from 'react-redux';
import * as actions from '../state/session/actions'

type Props = {
  isAuthenticated: boolean,
  logout: () => boolean
}

const Navigation = (props: Props): React.Node => (
  <div>
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        { authButton(props) }
      </ul>
    </nav>
    <SearchBar />
  </div>
)

const authButton = (props: Props) => {
  if ( props.isAuthenticated ) {
    return <button onClick={ () => props.logout() }> Sign Out </button>
  }
  return <Link to="/login"><button>Sign in</button></Link>
}

const mapStateToProps = (state) => (
  { isAuthenticated: state.session.isAuthenticated }
)

const bindActionsToDispatch = (dispatch) => (
  { logout: () => { dispatch(actions.logout())} }
)

export default connect(mapStateToProps, bindActionsToDispatch)(Navigation);