//@flow
import * as React from 'react';
import { Link } from 'react-router-dom';
import SearchBar from './search_bar';
import { connect } from 'react-redux';
import * as actions from '../state/auth/signin';

type Props = {
  isAuthenticated: boolean,
  signout: () => void
}

const Navigation = (props: Props): React.Node => (
  <div>
    <nav>
      <Link to="/">Home</Link>
      {registerButton(props)}
      {authButton(props)}
    </nav>
    <SearchBar />
  </div >
)


const authButton = (props: Props) => {
  if (props.isAuthenticated) {
    return <Link to="/"><button onClick = { () => props.signout() }>Sign Out</button></Link>
  }
  return <Link to="/login"><button>Sign in</button></Link>
}

const registerButton = (props: Props) => {
  if (!props.isAuthenticated) {
    return <Link to='/register'><button> Register </button></Link>
  }
}

const mapStateToProps = (state) => {
  console.log(state.auth.signin.get('isAuthenticated'))
  return { isAuthenticated: state.auth.signin.get('isAuthenticated') }
}

const bindActionsToDispatch = (dispatch) => (
  { signout: () => { dispatch(actions.signout()) } }
)

export default connect(mapStateToProps, bindActionsToDispatch)(Navigation);