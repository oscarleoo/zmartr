import React, { useEffect } from 'react';
import { Route } from 'react-router-dom';
import { useAuth0 } from '../../auth0/react-auth0-spa';

const PrivateRoute = ({ component: Component, path }) => {
  const { loading, isAuthenticated, loginWithPopup } = useAuth0();

  useEffect(() => {
    if (loading || isAuthenticated) {
      return;
    }
    const fn = async () => {
      await loginWithPopup({
        appState: { targetUrl: window.location.pathname },
      });
    };
    fn();
  }, [loading, isAuthenticated, loginWithPopup, path]);

  const render = (props) => (isAuthenticated === true ? <Component {...props} /> : null);

  return <Route exact path={path} render={render} />;
};

export default PrivateRoute;
