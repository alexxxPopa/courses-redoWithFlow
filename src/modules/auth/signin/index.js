import { signin, signout, checkSession, externalSignin } from './actions';
import { processSigninError } from './errors';
import reducer from './reducers';

export {
  signin,
  signout,
  checkSession,
  processSigninError,
  externalSignin
}

export default reducer;