import React from 'react';
import { makeStyles, Typography, Fab } from '@material-ui/core';
import LoginIcon from '@material-ui/icons/ExitToAppRounded';
import { useAuth0 } from '../../auth0/react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  startContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    background: theme.palette.background.gray,
  },
  startHeading: {
    fontSize: '80px',
    lineHeight: '90px',
    display: 'flex',
  },
  subHeading: {
    fontSize: '80px',
    lineHeight: '90px',
    marginTop: '40px',
  },
  note: {
    marginTop: '20px',
  },
  logo: {
    height: '90px',
    marginLeft: '20px',
  },
  loginFab: {
    margin: '0px 30px',
    background: theme.palette.background.gray,
    border: '5px solid #fff',
    height: '150px',
    width: '150px',
  },
  loginIcon: {
    color: theme.palette.text.light,
    fontSize: '70px',
  },
}));

const Start = () => {
  const classes = useStyles();
  const { loginWithPopup } = useAuth0();

  return (
    <div className={classes.startContainer}>
      <Typography variant="h1" align="center" className={classes.startHeading}>
        Welcome to Zmartr
      </Typography>
      <Typography variant="h1" align="center" className={classes.subHeading}>
        Click
        <Fab className={classes.loginFab} onClick={loginWithPopup}>
          <LoginIcon className={classes.loginIcon} />
        </Fab>
        to enter
      </Typography>
    </div>
  );
};

export default Start;
