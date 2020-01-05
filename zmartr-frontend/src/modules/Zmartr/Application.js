import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/styles';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import ApplicationRoutes from '../../routes/ApplicationRoutes';
import { logout } from '../../redux/actions/authentication';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    background: theme.palette.background.default,
  },
  view: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  items: {
    display: 'flex',
  },
}));


const Application = ({ children, logout }) => {
  const classes = useStyles();

  const createNavigationItems = () => (
    <p />
  );

  const createActionItems = () => (
    <div className={classes.items}>
      <Button color="secondary" onClick={logout}>
          Logout
      </Button>
    </div>
  );

  return (
    <Router>
      <div className={classes.root}>
        <TopBar navigationItems={createNavigationItems()} actionItems={createActionItems()} />
        <div className={classes.view}>
          <ApplicationRoutes />
        </div>
      </div>
    </Router>
  );
};

const mapDispatchToProps = (dispatch) => ({
  logout: () => dispatch(logout()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Application);
