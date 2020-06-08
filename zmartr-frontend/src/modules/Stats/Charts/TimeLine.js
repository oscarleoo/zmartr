import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  ResponsiveContainer, CartesianGrid, LineChart, Legend, Line, XAxis, YAxis, Tooltip,
} from 'recharts';
import filterTasks from './utils/filterTasks';
import toTimeEachDay from '../../../utils/stats/toTimeEachDay';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    margin: '0 50px 30px 50px',
  },
  chartContainer: {
    flex: 1,
    position: 'relative',
  },
  chartContent: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  heading: {
    marginBottom: '40px',
  },
}));


const timeLineData = (tasks) => {
  const data = toTimeEachDay(tasks);
  return Object.values(data).sort((a, b) => (a.date > b.date ? 1 : -1));
};

const TimeLine = ({ tasks, tagFilter, statusFilter }) => {
  const classes = useStyles();
  const filteredTasks = filterTasks(tasks, tagFilter, statusFilter);

  return (
    <div className={classes.container}>
      <Typography variant="h4" className={classes.heading}>TimeLine (Last 50 Days)</Typography>
      <div className={classes.chartContainer}>
        <ResponsiveContainer className={classes.chartContent}>
          <LineChart
            barCategoryGap="10%"
            data={timeLineData(filteredTasks)}
            isAnimationActive={false}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="category" dataKey="day" />
            <YAxis yAxisId="left" />
            <YAxis yAxisId="right" orientation="right" />
            <Tooltip />
            <Legend />
            <Line yAxisId="left" type="monotone" dataKey="time" stroke="#8884d8" strokeWidth={2} unit="h" />
            <Line yAxisId="right" type="monotone" dataKey="completed" stroke="#82ca9d" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
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
)(TimeLine);
