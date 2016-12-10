import React from 'react';
import {Route, IndexRoute} from 'react-router';
import App from './components/app.js';
import Home from './components/Home.js';
import Store from './components/Store.js';
import Cart from './components/Cart.js';

export default (
  <Route path="/" component={App}>
    <IndexRoute component={Home} />
    <Route path="store" component={Store} />
    <Route path="cart" component={Cart} />
  </Route>
);