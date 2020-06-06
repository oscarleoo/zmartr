import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Router, Switch } from 'react-router-dom';
import { connect } from 'react-redux';
import { useAuth0 } from '../../auth0/react-auth0-spa';
import Start from '../Start';
import PrivateRoute from '../../components/PrivateRoute';
import Loading from '../../components/Loading';
import history from '../../utils/history';
import Tasks from '../Tasks';
import Stats from '../Stats';
import Settings from '../Settings';
import TopBar from '../../components/TopBar';
import { getTasks } from '../../redux/actions/tasks';


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

const Zmartr = ({ loadTasks }) => {
  const classes = useStyles();
  const { loading, isAuthenticated, getTokenSilently } = useAuth0();

  const renderRoutes = () => {
    if (loading) {
      return <Loading />;
    }

    if (isAuthenticated) {
      loadTasks(getTokenSilently);
      return (
        <Router history={history}>
          <TopBar />
          <div className={classes.view}>
            <Switch>
              <PrivateRoute exact path="/stats" component={Stats} />
              <PrivateRoute exact path="/*" component={Tasks} />
            </Switch>
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

const mapDispatchToProps = (dispatch) => ({
  loadTasks: async (getToken) => {
    const token = await getToken();
    dispatch(getTasks(token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Zmartr);
