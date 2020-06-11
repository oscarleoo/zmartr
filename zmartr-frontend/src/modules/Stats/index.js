import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Filter from './Filter';
import TimeLine from './TimeLine';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    background: theme.palette.background.white,
  },
  outerChartContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    padding: '2%',
  },
  chartContainer: {
    flex: 1,
    display: 'flex',
  },
}));

const Stats = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Filter />
      <div className={classes.outerChartContainer}>
        <div className={classes.chartContainer}>
          <TimeLine />
          <TimeLine />
        </div>
        <div className={classes.chartContainer}>
          <TimeLine />
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default Stats;
