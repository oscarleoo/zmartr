import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
// import AppBar from '@material-ui/core/AppBar';
import Typography from '@material-ui/core/Typography';
import LoginIcon from '@material-ui/icons/ExitToApp'
import { Button } from '@material-ui/core';

const useStyles = makeStyles(theme => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  topBar: {
      flex: '0 0 100px',
      width: '100%',
      boxShadow: '0 0 0 0',
      display: 'flex',
      flexDirection: 'row',
      justifyContent: 'space-between',
      alignItems: 'center',
  },
  topBarSection: {
    margin: '0 3%'
  }
}));


const TopBar = () => {

    const classes = useStyles();

    return (
        <div className={classes.topBar}>
              <div className={classes.topBarSection}>
                <Typography variant="h6" className={classes.title}>
                    Zmartr
                </Typography>
              </div>
              <div className={classes.topBarSection}>
                <Button variant='contained' color='primary' size='large' href='/login'>
                  <LoginIcon/>
                  Login
                </Button>
              </div>
        </div>
    )

}

export default TopBar