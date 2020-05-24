import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  chartContainer: {
    flex: 1,
    padding: '50px',
  },
}));

const PieChart = () => {
  const classes = useStyles();

  return (
    <div className={classes.chartContainer}>
      <Typography variant="h4" className={classes.heading}>PieChart</Typography>
    </div>
  );
};

export default PieChart;
