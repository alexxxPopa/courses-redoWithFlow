import { combineReducers } from 'redux';
import signup from './signup';
import signin from './signin';
import recover from './recover';

export default combineReducers({
  signup,
  signin,
  recover
})