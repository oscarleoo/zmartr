import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import TimeLine from '../TimeLine';
import ChartContainer from './ChartContainer';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2%',
  },
  chartContainer: {
    padding: '2%',
  },
}));


const Charts = ({ charts }) => {
  console.log(charts)
  const classes = useStyles();

  return (
    <Grid container className={classes.container}>
      <ChartContainer index={0} chart={charts[0]} />
      <ChartContainer index={1} chart={charts[1]} />
      <ChartContainer index={2} chart={charts[2]} />
      <ChartContainer index={3} chart={charts[3]} />
    </Grid>
  );
};


const mapStateToProps = (state) => ({
  charts: state.stats.charts,
});


export default connect(
  mapStateToProps,
  null
)(Charts);
