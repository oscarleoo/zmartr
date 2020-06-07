import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import MetricItem from '../../../components/Metrics/MetricItem';
import filterTasks from './utils/filterTasks';
import toTimeEachDay from '../../../utils/stats/toTimeEachDay';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    padding: '50px',
  },
  metricContainer: {
    display: 'flex',
    justifyContent: 'space-around',
    marginTop: '30px',
  },
}));

const averageTime = (tasks) => {
  const completedTasks = tasks.filter((task) => (
    task.actions[task.actions.length - 1].type === 'Finished'
  ));

  const hmm = toTimeEachDay(completedTasks);

  return '1h';
};

const Metrics = ({ tasks, tagFilter, statusFilter }) => {
  const classes = useStyles();
  const filteredTasks = filterTasks(tasks, tagFilter, statusFilter);

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.heading}>Metrics</Typography>
      <div className={classes.metricContainer}>
        <MetricItem description="Average time spend per task" score="1h 51m" />
        <MetricItem description="Average time spend per task" score="1h 51m" />
        <MetricItem description="Average time spend per task" score="1h 51m" />
        <MetricItem description="Average time spend per task" score="1h 51m" />
        <MetricItem description="Average time spend per completed task" score={averageTime(filteredTasks)} />
      </div>
    </div>
  );
};


const mapStateToProps = (state) => ({
  tasks: state.tasks.list,
  tagFilter: state.stats.tagFilter,
  statusFilter: state.stats.statusFilter,
});


export default connect(
  mapStateToProps,
  null,
)(Metrics);
