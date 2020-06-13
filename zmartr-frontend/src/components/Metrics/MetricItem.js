import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import LeftArrowIcon from '@material-ui/icons/ArrowBackIos';
import RightArrowIcon from '@material-ui/icons/ArrowForwardIos';
import tasksCompletedToday from './metrics/tasksCompletedToday';
import tasksCompletedLastNDays from './metrics/tasksCompletedLastNDays';
import { nextMetric, lastMetric } from '../../redux/actions/stats';
import timeSpentToday from './metrics/timeSpentToday';
import timeSpentLastNDays from './metrics/timeSpentLastNDays';
import tasksCompletedLastNDaysAvg from './metrics/tasksCompletedLastNDaysAvg';
import timeSpentLastNDaysAvg from './metrics/timeSpentLastNDaysAvg';
import NumberEditField from './NumberEditField';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      '& $arrow': {
        opacity: 1,
      },
    },
  },
  number: {
    fontSize: '22px',
    marginBottom: '10px',
    color: theme.palette.text.primary,
  },
  description: {
    color: 'gray',
  },
  metricContainer: {
    height: '100px',
    width: '100px',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  arrow: {
    padding: '5px',
    fontSize: '20px',
    opacity: 0,
    cursor: 'pointer',
    color: 'lightgray',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
}));

const metricLookup = {
  TasksCompletedToday: tasksCompletedToday,
  TasksCompletedLastNDays: tasksCompletedLastNDays,
  TasksCompletedLastNDaysAvg: tasksCompletedLastNDaysAvg,
  TimeSpentToday: timeSpentToday,
  TimeSpentLastNDays: timeSpentLastNDays,
  TimeSpentLastNDaysAvg: timeSpentLastNDaysAvg,
};

const MetricItem = ({ metric, index, tasks, rightMetric, leftMetric }) => {
  const classes = useStyles();
  const { score, description } = metricLookup[metric.key](tasks, metric.settings);

  return (
    <div className={classes.container}>
      <LeftArrowIcon className={classes.arrow} onClick={leftMetric(index)} />
      <div className={classes.metricContainer}>
        <Typography className={classes.number} align="center" variant="h2">
          {score}
        </Typography>
        <Typography className={classes.description} align="center" variant="caption">
          {description.split(' ').map((word) => {
            if (isNaN(word)) {
              return `${word} `;
            }

            return <NumberEditField index={index} number={word} variant="caption" />;
          })}
        </Typography>
      </div>
      <RightArrowIcon className={classes.arrow} onClick={rightMetric(index)} />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.list,
});

const mapDispatchToProps = (dispatch) => ({
  rightMetric: (index) => () => {
    dispatch(nextMetric(index));
  },
  leftMetric: (index) => () => {
    dispatch(lastMetric(index));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(MetricItem);
