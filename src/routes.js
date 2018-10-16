import React from 'react';
import { Route, Switch } from 'react-router-dom';

import App from './App';
import Users from './components/Users';

export default (
  <Switch>
    <Route exact path="/" component={App} />
    <Route exact path="/users" component={Users} />
  </Switch>
);
