import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  chartContainer: {
    flex: 1,
    padding: '50px 50px 50px 0',
  },
}));

const Metrics = () => {
  const classes = useStyles();

  return (
    <div className={classes.chartContainer}>
      <Typography variant="h4" className={classes.heading}>Metrics</Typography>
    </div>
  );
};

export default Metrics;
