import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Filter from './Filter';
import PieChart from './Charts/PieChart';
import Metrics from './Charts/Metrics';
import TimeLine from './Charts/TimeLine';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    background: theme.palette.background.white,
  },
  chartContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  topCharts: {
    flex: 1,
    display: 'flex',
  },
  bottomCharts: {
    flex: 1,
    display: 'flex',
  },
}));

const Stats = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Filter />
      <div className={classes.chartContainer}>
        <div className={classes.topCharts}>
          <PieChart />
          <Metrics />
        </div>
        <div className={classes.bottomCharts}>
          <TimeLine />
        </div>
      </div>
    </div>
  );
};

export default Stats;
