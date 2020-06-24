import React from 'react';
import { connect } from 'react-redux';
import {
  ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip,
} from 'recharts';

const temp = [
  {month: '2015.01', a: 4000, b: 2400, c: 2400},
  {month: '2015.02', a: 3000, b: 1398, c: 0},
  {month: '2015.03', a: 2000, b: 9800, c: 2290},
  {month: '2015.04', a: 2780, b: 3908, c: 2000},
  {month: '2015.05', a: 1890, b: 4800, c: 2181},
  {month: '2015.06', a: 2390, b: 3800, c: 2500},
  {month: '2015.07', a: 3490, b: 4300, c: 2100},
];

const createTimeObject = (numberOfDays) => {
  const timeObject = {};
  const today = new Date();
  for (let i = 0; i < numberOfDays; i += 1) {
    const date = new Date(today.getTime() - i * 1000 * 3600 * 24);
    const day = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    timeObject[day] = {
      day,
      date,
      time: 0,
      Started: 0,
      Stopped: 0,
      Finished: 0,
      Archived: 0,
    };
  }

  return timeObject;
};

const timeListToArea = (timeList, availableTags) => {
  const areaData = {};
  const allTags = {};

  for (let i = 0; i < timeList.length; i += 1) {
    const { startTime, time, tags } = timeList[i];
    const dayString = `${startTime.getFullYear()}-${startTime.getMonth()}-${startTime.getDate()}`;

    if (dayString in areaData) {
      
    } else {

    }
  }

  return timeList
}


const TagPercentChart = ({ timeList, availableTags }) => {
  const data = timeListToArea(timeList, availableTags);

  return (
    <ResponsiveContainer>
      <AreaChart
        width={500}
        height={400}
        data={timeList}
        margin={{
          top: 10, right: 30, left: 0, bottom: 0,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip />
        <Area type="monotone" dataKey="uv" stackId="1" stroke="#8884d8" fill="#8884d8" />
        <Area type="monotone" dataKey="pv" stackId="1" stroke="#82ca9d" fill="#82ca9d" />
        <Area type="monotone" dataKey="amt" stackId="1" stroke="#ffc658" fill="#ffc658" />
      </AreaChart>
    </ResponsiveContainer>
  );
};

const mapStateToProps = (state) => ({
  availableTags: state.tags.availableTags,
});

export default connect(
  mapStateToProps,
  null,
)(TagPercentChart);
