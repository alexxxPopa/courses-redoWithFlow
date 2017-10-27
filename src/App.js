import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import routes from './routes';
import configureStore from './configureStore';
import checkToken from './token';

const store = configureStore()
checkToken(store)

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
