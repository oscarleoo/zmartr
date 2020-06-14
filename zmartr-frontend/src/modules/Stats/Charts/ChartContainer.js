import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import LeftArrowIcon from '@material-ui/icons/ArrowBackIos';
import RightArrowIcon from '@material-ui/icons/ArrowForwardIos';
import EmptyChart from './EmptyChart';
import CompletedEachDay from '../../../components/Charts/CompletedEachDay';
import TimeSpentEachDay from '../../../components/Charts/TimeSpentEachDay';
import { nextChart, lastChart } from '../../../redux/actions/stats';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2% 3%',
  },
  chartContainer: {
    position: 'relative',
    width: '100%',
    height: '100%',
    '&:hover': {
      '& $arrow': {
        opacity: 1,
      },
    },
  },
  chart: {
    position: 'absolute',
    top: '15%',
    left: 0,
    right: 0,
    bottom: 0,
  },
  chartTitle: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    padding: '5px 20px',
    fontSize: '20px',
    opacity: 0,
    cursor: 'pointer',
    color: 'lightgray',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
}));


const chartLookup = {
  CompletedEachDay: { Chart: CompletedEachDay, title: 'Completed Tasks Per Day' },
  TimeSpentEachDay: { Chart: TimeSpentEachDay, title: 'Total Time Spent Per Day' },
};


const ChartContainer = ({ index, chart, leftChart, rightChart }) => {
  const classes = useStyles();

  const renderContent = () => {
    if (chart.key === 'Empty') {
      return <EmptyChart index={index} />;
    }

    const { Chart, title } = chartLookup[chart.key];
    return (
      <div className={classes.chartContainer}>
        <div className={classes.chartTitle}>
          <LeftArrowIcon className={classes.arrow} onClick={leftChart(index)} />
          <Typography variant="h4" align="center">{title}</Typography>
          <RightArrowIcon className={classes.arrow} onClick={rightChart(index)} />
        </div>
        <div className={classes.chart}>
          <Chart />
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

const mapDispatchToProps = (dispatch) => ({
  rightChart: (index) => () => {
    dispatch(nextChart(index));
  },
  leftChart: (index) => () => {
    dispatch(lastChart(index));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(ChartContainer);
