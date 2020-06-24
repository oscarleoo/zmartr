// https://recharts.org/en-US/examples/BubbleChart


import React from 'react';
import {
  ScatterChart, Scatter, XAxis, YAxis, ZAxis, Tooltip,
  Legend, ResponsiveContainer,
} from 'recharts';

const hours = [
  { hour: '00', index: 1, value: 0 },
  { hour: '01', index: 1, value: 0 },
  { hour: '02', index: 1, value: 0 },
  { hour: '03', index: 1, value: 0 },
  { hour: '04', index: 1, value: 0 },
  { hour: '05', index: 1, value: 0 },
  { hour: '06', index: 1, value: 0 },
  { hour: '07', index: 1, value: 0 },
  { hour: '08', index: 1, value: 0 },
  { hour: '09', index: 1, value: 0 },
  { hour: '10', index: 1, value: 0 },
  { hour: '11', index: 1, value: 0 },
  { hour: '12', index: 1, value: 0 },
  { hour: '13', index: 1, value: 0 },
  { hour: '14', index: 1, value: 0 },
  { hour: '15', index: 1, value: 0 },
  { hour: '16', index: 1, value: 0 },
  { hour: '17', index: 1, value: 0 },
  { hour: '18', index: 1, value: 0 },
  { hour: '19', index: 1, value: 0 },
  { hour: '20', index: 1, value: 0 },
  { hour: '21', index: 1, value: 0 },
  { hour: '22', index: 1, value: 0 },
  { hour: '23', index: 1, value: 0 },
];

const transformTimeList = (timeList) => {
  const days = {
    Mon: JSON.parse(JSON.stringify(hours)),
    Tue: JSON.parse(JSON.stringify(hours)),
    Wed: JSON.parse(JSON.stringify(hours)),
    Thu: JSON.parse(JSON.stringify(hours)),
    Fri: JSON.parse(JSON.stringify(hours)),
    Sat: JSON.parse(JSON.stringify(hours)),
    Sun: JSON.parse(JSON.stringify(hours)),
  };
  const completed = timeList.filter((timeObject) => timeObject.actionType === 'Finished');
  const dayLookup = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
  for (let i = 0; i < completed.length; i += 1) {
    const day = dayLookup[completed[i].endTime.getDay()];
    const hour = completed[i].endTime.getHours();
    days[day][hour].value += 1;
  }


  return days;
};


const ProductiveTime = ({ timeList }) => {
  const data = transformTimeList(timeList);
  const days = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];
  const range = [0, 100];

  return (
    <div style={{ position: 'absolute', top: 0, right: 0, left: 0, bottom: 0, display: 'flex', flexDirection: 'column' }}>
      {days.map((day, index) => {
        const height = index === days.length - 1 ? 45 : 30;
        const xHeight = index === days.length - 1 ? 20 : 5;
        return (
          <div style={{ flex: 1 }}>
            <ResponsiveContainer height={height}>
              <ScatterChart margin={{ top: 10, right: 0, bottom: 0, left: 0 }}>
                <XAxis type="category" height={xHeight} dataKey="hour" interval={0} tick={index !== days.length - 1 ? { fontSize: 0 } : { fontSize: 12 }} tickLine={{ transform: 'translate(0, -6)' }} />
                <YAxis type="number" dataKey="index" name={day} height={10} width={50} tick={false} tickLine={false} axisLine={false} label={{ fontSize: 14, value: day, position: 'insideRight' }} />
                <ZAxis type="number" dataKey="value" range={range} />
                <Scatter data={data[day]} fill="#8884d8" />
              </ScatterChart>
            </ResponsiveContainer>
          </div>
        )
      })}
    </div>
  );
};

export default ProductiveTime;