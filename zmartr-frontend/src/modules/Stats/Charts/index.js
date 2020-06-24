import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid } from '@material-ui/core';
import ChartContainer from './ChartContainer';
import filterTasks from '../utils/filterTasks';
import toTimeEachDay from '../../../utils/stats/toTimeEachDay';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    padding: '2%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));


const Charts = ({ charts, tasks, tagFilter, statusFilter }) => {
  const classes = useStyles();
  const filteredTasks = filterTasks(tasks, tagFilter, statusFilter);
  const timeList = toTimeEachDay(filteredTasks);


  return (
    <div className={classes.container}>
      <ChartContainer timeList={timeList} index={0} chart={charts[0]} />
    </div>
  );
};


const mapStateToProps = (state) => ({
  charts: state.stats.charts,
  tasks: state.tasks.list,
  tagFilter: state.stats.tagFilter,
  statusFilter: state.stats.statusFilter,
});


export default connect(
  mapStateToProps,
  null,
)(Charts);
