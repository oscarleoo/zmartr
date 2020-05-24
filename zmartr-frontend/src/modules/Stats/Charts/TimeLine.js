import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import {
  ResponsiveContainer, CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts';
import prepareTimeLineData from './utils/prepareTimeLineData';
import filterTasks from './utils/filterTasks';


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
  const data = prepareTimeLineData();

  for (let j = 0; j < tasks.length; j += 1) {
    const { actions } = tasks[j];

    let startTime;
    for (let i = 0; i < actions.length; i += 1) {
      if (actions[i].type === 'Started' && !startTime) {
        startTime = new Date(actions[i].date);
      }
      if (actions[i].type !== 'Started' && startTime) {
        const day = `${startTime.getFullYear()}-${startTime.getMonth()}-${startTime.getDate()}`;
        const timeSpent = (Date.parse(actions[i].date) - startTime) / 3600000;
        if (day in data) {
          data[day].time = Math.round((data[day].time + timeSpent) * 100) / 100;
        }
        startTime = null;
      }
    }
  }

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
          <BarChart
            barCategoryGap="10%"
            data={timeLineData(filteredTasks)}
            isAnimationActive={false}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis type="category" dataKey="day" />
            <YAxis type="number" dataKey="time" domain={[0, 16]} unit="h" width={30} />
            <Tooltip cursor={{ fill: '#eaeaea' }} />
            <Bar dataKey="time" fill="#29BF12" unit="h" />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.stats.tasks,
  tagFilter: state.stats.tagFilter,
  statusFilter: state.stats.statusFilter,
});

export default connect(
  mapStateToProps,
  null,
)(TimeLine);
