import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Tasks from '../modules/Tasks';

const ApplicationRoutes = () => (
  <Router>

    <Route exact path='/' component={Tasks} />
    {/* <Route exact path='/stats' component={Stats} /> */}
    {/* <Route exact path='/profile' component={Profile} /> */}

  </Router>
);

export default ApplicationRoutes;
