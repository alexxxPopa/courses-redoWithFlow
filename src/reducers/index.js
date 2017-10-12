import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { auth } from '../state';

const rootReducer = combineReducers({
  form,
  auth
});

export default rootReducer;