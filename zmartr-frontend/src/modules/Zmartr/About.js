import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LoginIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import { BrowserRouter as Router, Link } from 'react-router-dom';
import TopBar from '../../components/TopBar';
import AboutRoutes from '../../routes/AboutRoutes';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    background: theme.palette.background.gray,
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
  login: {
    marginLeft: '20px',
  },
  loginIcon: {
    marginRight: '10px',
  },
}));


const About = () => {
  console.log('About')
  const classes = useStyles();
  const createNavigationItems = () => (<p />);

  const createActionItems = () => (
    <div className={classes.items}>
      <Link to="/register" style={{ textDecoration: 'none' }}>
        <Button color="secondary" focusVisible={false}>
            Register
        </Button>
      </Link>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Button variant="contained" color="primary" size="large" className={classes.login}>
          <LoginIcon className={classes.loginIcon} />
            Login
        </Button>
      </Link>
    </div>
  );

  return (
    <Router>
      <div className={classes.root}>
        <TopBar navigationItems={createNavigationItems()} actionItems={createActionItems()} />
        <div className={classes.view}>
          <AboutRoutes />
        </div>
      </div>
    </Router>
  );
};

export default About;
