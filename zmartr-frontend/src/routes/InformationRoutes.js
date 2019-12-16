import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Start from '../modules/Start';
import Login from '../modules/Authentication/Login';
import Register from '../modules/Authentication/Register';

const InformationRoutes = () => (
  <Router>

    <Route exact path='/' component={Start} />
    <Route exact path='/login' component={Login} />
    <Route exact path='/register' component={Register} />

  </Router>
);

export default InformationRoutes;
