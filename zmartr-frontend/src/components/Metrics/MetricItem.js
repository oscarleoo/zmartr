import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  metricContainer: {
    height: '130px',
    width: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: '30px',
  },
  number: {
    fontSize: '30px',
    marginBottom: '20px',
    color: 'gray',
  },
  description: {
    color: 'gray',
  },
}));


const MetricItem = ({
  description, score, unit,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.metricContainer}>
      <Typography className={classes.number} align="center" variant="h2">
        {score}
        {unit}
      </Typography>
      <Typography className={classes.description} align="center" variant="caption">{description}</Typography>
    </div>
  );
};

export default MetricItem;
