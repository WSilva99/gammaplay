import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Clients from './pages/Clients/Index';
import Products from './pages/Products/Index';
import Store from './pages/Store/Index';

export default function Routes() {
  return (
    <Switch>
      <Route path='/' exact component={Store} />
      <Route path='/products' component={Products} />
      <Route path='/clients' component={Clients} />
    </Switch>
  )
}