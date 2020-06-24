import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid, Typography } from '@material-ui/core';
import LeftArrowIcon from '@material-ui/icons/ArrowBackIos';
import RightArrowIcon from '@material-ui/icons/ArrowForwardIos';
import EmptyChart from './EmptyChart';
import CompletedEachDay from '../../../components/Charts/CompletedEachDay';
import TimeSpentEachDay from '../../../components/Charts/TimeSpentEachDay';
import { nextChart, lastChart } from '../../../redux/actions/stats';
import ProductiveTime from '../../../components/Charts/ProductiveTime';


const useStyles = makeStyles((theme) => ({
  container: {
    height: '80%',
    width: '80%',
    maxHeight: '550px',
    maxWidth: '1100px',
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
    top: '80px',
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
  ProductiveTime: { Chart: ProductiveTime, title: 'When I complete my tasks' },
};


const ChartContainer = ({ timeList, index, chart, leftChart, rightChart }) => {
  const classes = useStyles();

  const renderContent = () => {
    const { Chart, title } = chartLookup[chart.key];
    return (
      <div className={classes.chartContainer}>
        <div className={classes.chartTitle}>
          <LeftArrowIcon className={classes.arrow} onClick={leftChart(index)} />
          <Typography variant="h3" align="center">{title}</Typography>
          <RightArrowIcon className={classes.arrow} onClick={rightChart(index)} />
        </div>
        <div className={classes.chart}>
          <Chart timeList={timeList} />
        </div>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      {renderContent()}
    </div>
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
