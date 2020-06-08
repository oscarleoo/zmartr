import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Filter from './Filter';
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
  },
}));

const Stats = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Filter />
      <div className={classes.chartContainer}>
        <TimeLine />
      </div>
    </div>
  );
};

export default Stats;
