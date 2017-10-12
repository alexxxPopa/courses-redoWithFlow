import { combineReducers } from 'redux';
import signup from './signup';
import signin from './signin';

export default combineReducers({
  signup,
  signin
})