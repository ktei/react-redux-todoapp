import React from 'react';
import { Route, Switch } from 'react-router-dom';
import TodoList from './TodoList';

export default () => (
  <Switch>
    <Route exact path="/" component={TodoList} />
  </Switch>
);

