import React from 'react';
import { CircularProgress, makeStyles } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  loadingApplication: {
    backgroundColor: theme.palette.background.green,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
  },
  loadingContainer: {
    margin: '50px',
  },
}));

const Loading = () => {
  const classes = useStyles();

  return (
    <div className={classes.loadingApplication}>
      <div className={classes.loadingContainer}>
        <CircularProgress size={100} />
      </div>
    </div>
  );
};

export default Loading;
