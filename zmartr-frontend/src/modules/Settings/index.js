import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    background: theme.palette.background.white,
    padding: '50px 5%',
  },
}));

const Settings = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography variant="h4">Tags</Typography>
    </div>
  );
};

export default Settings;
