import React from 'react';
import {
  ResponsiveContainer, CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts';
import mergeTimeLists from '../../utils/stats/mergeTimeLists';

const timeLineData = (timeList) => {
  const data = mergeTimeLists(timeList, 20);
  return Object.values(data).sort((a, b) => (a.date > b.date ? 1 : -1));
};

const CompletedEachDay = ({ timeList }) => {
  const data = timeLineData(timeList);
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
        <YAxis domain={[0, completedUpper]} width={40} allowDecimals={false} />
        <Tooltip />
        <Bar fill="#82ca9d" dataKey="Finished" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default CompletedEachDay;
