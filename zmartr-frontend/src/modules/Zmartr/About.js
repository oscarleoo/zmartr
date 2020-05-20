import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import LoginIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import Fab from '@material-ui/core/Fab';
import { Link } from 'react-router-dom';
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
  const classes = useStyles();
  const createNavigationItems = () => (<p />);

  const createActionItems = () => (
    <div className={classes.items}>
      <Link to="/login" style={{ textDecoration: 'none' }}>
        <Fab color="primary" aria-label="add">
          <LoginIcon />
        </Fab>
      </Link>
    </div>
  );

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.view}>
        <AboutRoutes />
      </div>
    </div>
  );
};

export default About;
