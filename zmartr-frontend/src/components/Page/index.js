import React from 'react';
import { makeStyles } from '@material-ui/styles';
import TopBar from '../TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    background: theme.palette.background.default
  },
  view: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
}));

const Page = ({ children }) => {
  
    const classes = useStyles();

  return (
    <div className={classes.root}>
      <TopBar />
      <div className={classes.view}> 
        {children}
      </div>
    </div>
  );
};

export default Page;
