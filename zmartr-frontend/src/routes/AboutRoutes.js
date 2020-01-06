import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Start from '../modules/Start';
import Login from '../modules/Authentication/Login';
import Register from '../modules/Authentication/Register';

const AboutRoutes = () => (
  <Switch>
    <Route exact path="/login" component={Login} />
    <Route exact path="/register" component={Register} />
    <Route exact path="/*" component={Start} />
  </Switch>
);

export default AboutRoutes;
