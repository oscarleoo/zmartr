import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Tasks from '../modules/Tasks';
import Stats from '../modules/Stats';

const ApplicationRoutes = () => (
  <Switch>
    <Route exact path="/stats" component={Stats} />
    <Route exact path="/*" component={Tasks} />
    {/* <Route exact path='/profile' component={Profile} /> */}
  </Switch>
);

export default ApplicationRoutes;
