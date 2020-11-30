import React from 'react';
import { Switch, Route } from 'react-router-dom';

import Dashboard from '../pages/Dashboard';
import Movie from '../pages/Movie';

const Routes: React.FC = () => (
  <Switch>
    <Route path="/" exact component={Dashboard} />
    <Route path="/movie/:movie+" component={Movie} />
  </Switch>
);
export default Routes;
