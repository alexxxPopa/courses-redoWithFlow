import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
import reducers from './reducers';


export default () => {
  const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore)
  return createStoreWithMiddleware(reducers)
}