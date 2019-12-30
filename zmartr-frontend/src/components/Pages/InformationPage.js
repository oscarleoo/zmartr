import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LoginIcon from '@material-ui/icons/ExitToApp';
import Button from '@material-ui/core/Button';
import TopBar from '../TopBar';
import Message from '../Message';

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


const Page = ({ children }) => {
  const classes = useStyles();

  const createNavigationItems = () => (
    <p />
  );

  const createActionItems = () => (
    <div className={classes.items}>
      <Button color="secondary" focusVisible={false} href="/register">
          Register
      </Button>
      <Button variant="contained" color="primary" size="large" href="/login" className={classes.login}>
        <LoginIcon className={classes.loginIcon} />
          Login
      </Button>
    </div>
  );

  return (
    <div className={classes.root}>
      <TopBar navigationItems={createNavigationItems()} actionItems={createActionItems()} />
      <div className={classes.view}>
        {children}
      </div>
      <Message />
    </div>
  );
};

export default Page;
