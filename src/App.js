import React, { Component } from 'react';
import './App.css';
import Home from './components/home'
import SearchList from './components/search_list'

import { BrowserRouter, Route, Switch } from 'react-router-dom'; 

class App extends Component {
  render() {
    return (
     <BrowserRouter>
      <div>
        <Switch>
          <Route path="/search/:term" component = { SearchList } />

          <Route path="/" component= { Home } />
        </Switch>
      </div>
    </BrowserRouter>
    );
  }
}

export default App;
