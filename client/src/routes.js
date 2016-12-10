import React from 'react';
import {Router, Route} from 'react-router';
import App from './components/app.js';
import Home from './components/Home.js';
import Store from './components/Store.js';

export default (
  <Route path="/" component={App}>
    <Route path="Home" component={Home} />
    <Route path="Store" component={Store} />
  </Route>
);