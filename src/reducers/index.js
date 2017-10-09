import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { session } from '../state';

const rootReducer = combineReducers({
  form: formReducer,
  session
});

export default rootReducer;