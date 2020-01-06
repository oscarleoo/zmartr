import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListAltIcon from '@material-ui/icons/ListAlt';
import LoginIcon from '@material-ui/icons/ExitToApp';
import { NavLink } from 'react-router-dom';
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
  },
  items: {
    display: 'flex',
  },
  iconButton: {
    marginLeft: '20px',
    backgroundColor: 'transparent',
    '&hover': {
      color: theme.palette.primary.main,
    },
  },
  icon: {
    marginRight: '10px',
  },
}));


const Application = ({ logoutUser }) => {
  const classes = useStyles();

  const createNavigationItems = () => (
    <div className={classes.items}>
      <NavLink to="/" size="large" style={{ textDecoration: 'none' }}>
        <Button color="secondary" size="large" className={classes.iconButton}>
          <ListAltIcon className={classes.icon} />
          Tasks
        </Button>
      </NavLink>
      <NavLink to="/stats" style={{ textDecoration: 'none' }}>
        <Button color="secondary" size="large" className={classes.iconButton}>
          <BarChartIcon className={classes.icon} />
          Stats
        </Button>
      </NavLink>
    </div>
  );

  const createActionItems = () => (
    <div className={classes.items}>
      <Button color="secondary" size="large" onClick={logoutUser}>
        <LoginIcon className={classes.icon} />
        Logout
      </Button>
    </div>
  );

  return (
    <div className={classes.root}>
      <TopBar navigationItems={createNavigationItems()} actionItems={createActionItems()} />
      <div className={classes.view}>
        <ApplicationRoutes />
      </div>
    </div>
  );
};

Application.propTypes = {
  logoutUser: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  logoutUser: () => dispatch(logout()),
});

export default connect(
  null,
  mapDispatchToProps,
)(Application);
