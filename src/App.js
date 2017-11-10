import React, { Component } from 'react';
import './App.css';
import { Provider } from 'react-redux';
import { StripeProvider } from 'react-stripe-elements';
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
        <StripeProvider apiKey='pk_live_6FT0dLSF6rIqaHfkxNvPTGXs'>
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
        </StripeProvider>
      </Provider>
    );
  }
}

export default App;
