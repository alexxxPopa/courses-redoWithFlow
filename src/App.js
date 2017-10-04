import React, { Component } from 'react';
import './App.css';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import reducers from './reducers';
import routes from './routes';

//import { Home, Register, Login, SearchList } from './pages' 

const createStoreWithMiddleware = applyMiddleware()(createStore);

class App extends Component {
  render() {
    return (
      <Provider store={createStoreWithMiddleware(reducers)}>
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
