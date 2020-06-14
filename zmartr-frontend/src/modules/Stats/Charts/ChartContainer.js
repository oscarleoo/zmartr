import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import TimeSpentEachDay from '../../../components/Charts/TimeSpentEachDay';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2% 3%',
    width: '60%',
    height: '50%',
  },
}));


const ChartContainer = ({ index, chart }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <TimeSpentEachDay />
    </div>
  );
};


export default connect(
  null,
  null,
)(ChartContainer);
