import React from 'react';
import { makeStyles } from '@material-ui/styles';
import LoginIcon from '@material-ui/icons/ExitToApp'
import Button from '@material-ui/core/Button';
import TopBar from '../TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    background: theme.palette.background.gray
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
  }
}));


const Page = ({ children }) => {
  
  const classes = useStyles();

  const createNavigationItems = () => {
    return (
      <p></p>
    )
  }
  
  const createActionItems = () => {
    return (
      <div className={classes.items}>
        <Button color='secondary' focusVisible={false} href='/register'>
          Register
        </Button>
        <Button variant='contained' color='primary' size='large' href='/login' className={classes.login}>
          <LoginIcon/>
          Login
        </Button>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <TopBar navigationItems={createNavigationItems()} actionItems={createActionItems()}/>
      <div className={classes.view}> 
        {children}
      </div>
    </div>
  );
};

export default Page;
