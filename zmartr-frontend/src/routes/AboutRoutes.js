import React from 'react';
import { Route } from 'react-router-dom';
import Start from '../modules/Start';
import Login from '../modules/Authentication/Login';
import Register from '../modules/Authentication/Register';

const AboutRoutes = () => {
  console.log('AboutRoutes')
  return (
    <div style={{ display: 'flex', flex: 1 }}>
      <Route exact path="/" component={Start} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/register" component={Register} />
    </div>
  )
};

export default AboutRoutes;
