import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { session } from '../state';

const rootReducer = combineReducers({
  form,
  session
});

export default rootReducer;