//@flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';
import { connect } from 'react-redux';
import * as actions from '../../modules/auth/signin';
import { SignupButton, AuthButton } from '../auth/buttons';

type Props = {
  isAuthenticated: boolean,
  signout: () => void
}

const Navigation = (props: Props): React.Node => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {SignupButton(props.isAuthenticated)}
      {AuthButton(props)}
    </nav>
    <SearchBar />
  </div >
)

const mapStateToProps = (state) => {
  return { isAuthenticated: state.auth.signin.get('isAuthenticated') }
}

const bindActionsToDispatch = (dispatch) => (
  { signout: () => { dispatch(actions.signout()) } }
)

export default connect(mapStateToProps, bindActionsToDispatch)(Navigation);