import React from 'react';
import { connect } from 'react-redux';
import {
  ResponsiveContainer, CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts';
import toTimeEachDay from '../../utils/stats/toTimeEachDay';
import filterTasks from '../../modules/Stats/utils/filterTasks';

const timeLineData = (tasks) => {
  const data = toTimeEachDay(tasks, 20);
  return Object.values(data).sort((a, b) => (a.date > b.date ? 1 : -1));
};

const CompletedEachDay = ({ tasks, tagFilter, statusFilter }) => {
  const filteredTasks = filterTasks(tasks, tagFilter, statusFilter);
  const data = timeLineData(filteredTasks);
  const completedUpper = Math.max(...data.map((day) => (day.completed)));

  return (
    <ResponsiveContainer>
      <BarChart
        barCategoryGap="10%"
        data={data}
        isAnimationActive={false}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis type="category" dataKey="day" tick={false} height={5} />
        <YAxis domain={[0, completedUpper]} width={40} />
        <Tooltip />
        <Bar fill="#82ca9d" dataKey="completed" />
      </BarChart>
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
)(CompletedEachDay);
