import React from 'react';
import {
  ResponsiveContainer, CartesianGrid, LineChart, Line, XAxis, YAxis, Tooltip,
} from 'recharts';
import mergeTimeLists from '../../utils/stats/mergeTimeLists';

const TimeSpentEachDay = ({ timeList }) => {
  const data = mergeTimeLists(timeList, 20);
  const timeUpper = Math.ceil(Math.max(...data.map((day) => (day.time))));

  return (
    <ResponsiveContainer>
      <LineChart
        barCategoryGap="10%"
        data={data}
        isAnimationActive={false}
      >
        <CartesianGrid strokeDasharray="5 5" />
        <XAxis type="category" dataKey="day" tick={false} height={20} />
        <YAxis yAxisId="left" domain={[0, timeUpper]} unit="h" width={40} allowDecimals={false} />
        <Tooltip />
        <Line yAxisId="left" type="monotone" dataKey="time" stroke="#8884d8" strokeWidth={2} unit="h" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default TimeSpentEachDay;
