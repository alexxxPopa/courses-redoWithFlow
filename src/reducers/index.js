import { auth, utils } from '../modules';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { loadingBarReducer } from 'react-redux-loading-bar'


const rootReducer = combineReducers ({
  form,
  loadingBar: loadingBarReducer,
  utils,
  auth
})

export default rootReducer;