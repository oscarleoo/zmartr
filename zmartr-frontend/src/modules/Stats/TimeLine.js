import React from 'react';
import { connect } from 'react-redux';
import {
  ResponsiveContainer, CartesianGrid, LineChart, Legend, Line, XAxis, YAxis, Tooltip,
} from 'recharts';
import filterTasks from './utils/filterTasks';
import toTimeEachDay from '../../utils/stats/toTimeEachDay';

const timeLineData = (tasks) => {
  const data = toTimeEachDay(tasks, 20);
  return Object.values(data).sort((a, b) => (a.date > b.date ? 1 : -1));
};

const TimeLine = ({ tasks, tagFilter, statusFilter }) => {
  const filteredTasks = filterTasks(tasks, tagFilter, statusFilter);
  const data = timeLineData(filteredTasks);
  const timeUpper = Math.ceil(Math.max(...data.map((day) => (day.time))));
  const completedUpper = Math.max(...data.map((day) => (day.completed)));

  return (
    <ResponsiveContainer>
      <LineChart
        barCategoryGap="10%"
        data={data}
        isAnimationActive={false}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis type="category" dataKey="day" tick={false} height={5} />
        <YAxis yAxisId="left" domain={[0, timeUpper]} unit="h" width={40} />
        <Tooltip />
        <Line yAxisId="left" type="monotone" dataKey="time" stroke="#8884d8" strokeWidth={2} unit="h" />
      </LineChart>
    </ResponsiveContainer>
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