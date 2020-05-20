import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router } from 'react-router-dom';
import Message from '../../components/Message';
import { useAuth0 } from '../../auth0/react-auth0-spa';
import Start from '../Start';
import PrivateRoute from '../../components/PrivateRoute';
import Loading from '../../components/Loading';
import history from '../../utils/history';
import Tasks from '../Tasks';
import TopBar from '../../components/TopBar';


const useStyles = makeStyles((theme) => ({
  application: {
    height: '100vh',
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  view: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
}));

const Zmartr = () => {
  const classes = useStyles();
  const { loading, isAuthenticated } = useAuth0();

  const renderRoutes = () => {
    if (loading) {
      return <Loading />;
    }

    if (isAuthenticated) {
      return (
        <Router history={history}>
          <TopBar />
          <div className={classes.view}>
            <PrivateRoute exact path="/*" component={Tasks} />
          </div>
        </Router>
      );
    }
    return (
      <Start />
    );
  };

  return (
    <div className={classes.application}>
      {renderRoutes()}
      {/* <Message /> */}
    </div>
  );
};


export default Zmartr;
