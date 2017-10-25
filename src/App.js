import React, { Component } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reduxThunk from 'redux-thunk';
import { combineReducers } from 'redux';
import { reducer as form } from 'redux-form';
import { auth } from './modules';
import routes from './routes';
import * as actions from './modules/auth/signin'
import { loadingBarReducer } from 'react-redux-loading-bar'

const rootReducer = combineReducers({
  form,
  loadingBar: loadingBarReducer,
  auth
})

const createStoreWithMiddleware = applyMiddleware(reduxThunk)(createStore);
const store = createStoreWithMiddleware(rootReducer)

const token = localStorage.getItem('token')
if (token) {
   store.dispatch(actions.checkSession())
}

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <BrowserRouter>
          <div>
            <Switch>
              { routes.map( route => (
                <Route key= {route.path} { ...route } />
              ))
                }
            </Switch>
          </div>
        </BrowserRouter>
      </Provider>
    );
  }
}

export default App;
