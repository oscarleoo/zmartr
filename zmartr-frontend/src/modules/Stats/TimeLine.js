import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import {
  ResponsiveContainer, CartesianGrid, LineChart, Legend, Line, XAxis, YAxis, Tooltip,
} from 'recharts';
import filterTasks from './utils/filterTasks';
import toTimeEachDay from '../../utils/stats/toTimeEachDay';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    // alignItems: 'center',
    margin: '50px 7% 30px 7%',
  },
  chartContainer: {
    flex: 1,
    position: 'relative',
    maxHeight: '550px',
  },
  chartContent: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
}));


const timeLineData = (tasks) => {
  const data = toTimeEachDay(tasks);
  return Object.values(data).sort((a, b) => (a.date > b.date ? 1 : -1));
};

const TimeLine = ({ tasks, tagFilter, statusFilter }) => {
  const classes = useStyles();
  const filteredTasks = filterTasks(tasks, tagFilter, statusFilter);
  const data = timeLineData(filteredTasks);
  const timeUpper = Math.ceil(Math.max(...data.map((day) => (day.time))));
  const completedUpper = Math.max(...data.map((day) => (day.completed)));

  return (
    <div className={classes.container}>
      <div className={classes.chartContainer}>
        <ResponsiveContainer className={classes.chartContent}>
          <LineChart
            barCategoryGap="10%"
            data={data}
            isAnimationActive={false}
          >
            <CartesianGrid strokeDasharray="5 5" />
            <XAxis type="category" dataKey="day" tick={false} />
            <YAxis yAxisId="left" domain={[0, timeUpper]} unit="h" />
            <YAxis yAxisId="right" orientation="right" domain={[0, completedUpper]} />
            <Tooltip />
            <Legend verticalAlign="bottom" />
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