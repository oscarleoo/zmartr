import React from 'react';
import { Route } from 'react-router-dom';
import Tasks from '../modules/Tasks';

const ApplicationRoutes = () => (
  <div>
    <Route exact path='/' component={Tasks} />
    {/* <Route exact path='/stats' component={Stats} />
    <Route exact path='/profile' component={Profile} /> */}
  </div>
);

export default ApplicationRoutes;
