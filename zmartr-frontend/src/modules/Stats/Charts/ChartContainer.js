import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import TimeLine from '../TimeLine';
import EmptyChart from './EmptyChart';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2% 3%',
  },
  chartContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
  },
  chart: {
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    bottom: 0,
  },
}));


const ChartContainer = ({ index, chart }) => {
  const classes = useStyles();

  const renderContent = () => {
    if (Object.entries(chart).length === 0) {
      return <EmptyChart index={index} />;
    }

    return (
      <div className={classes.chartContainer}>
        <Typography variant="h4" align="center">Chart Title</Typography>
        <div className={classes.chart}>
          <TimeLine />
        </div>
      </div>
    );
  };

  return (
    <Grid className={classes.container} item xs={6}>
      {renderContent()}
    </Grid>
  );
};


export default connect(
  null,
  null,
)(ChartContainer);
