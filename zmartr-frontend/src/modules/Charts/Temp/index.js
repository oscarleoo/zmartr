import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Grid } from '@material-ui/core';
import ChartContainer from './ChartContainer';
import filterTasks from '../utils/filterTasks';
import toTimeEachDay from '../../../utils/stats/toTimeEachDay';


const useStyles = makeStyles((theme) => ({
  container: {
    padding: '2%',
  },
  chartContainer: {
    padding: '2%',
  },
}));


const Charts = ({ charts, tasks, tagFilter, statusFilter }) => {
  const classes = useStyles();
  const filteredTasks = filterTasks(tasks, tagFilter, statusFilter);
  const timeList = toTimeEachDay(filteredTasks);


  return (
    <Grid container className={classes.container}>
      <ChartContainer timeList={timeList} index={0} chart={charts[0]} />
      <ChartContainer timeList={timeList} index={1} chart={charts[1]} />
      <ChartContainer timeList={timeList} index={2} chart={charts[2]} />
      <ChartContainer timeList={timeList} index={3} chart={charts[3]} />
    </Grid>
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
