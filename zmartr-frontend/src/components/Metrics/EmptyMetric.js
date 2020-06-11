import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  emptyMetricContainer: {
    height: '100px',
    width: '100px',
  },
}));


const EmptyMetric = () => {
  const classes = useStyles();

  return (
    <div className={classes.emptyMetricContainer} />
  );
};

export default EmptyMetric;
