import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import {
  ResponsiveContainer, CartesianGrid, BarChart, Bar, XAxis, YAxis, Tooltip,
} from 'recharts';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: '30px',
  },
  container: {
    maxWidth: '800px',
    minWidth: '500px',
    padding: '50px',
    background: '#fafafa',
  },
}));

const radialBarChartData = (tasks) => {
  const data = {};
  const tags = [].concat(...tasks.map((task) => task.tags));
  for (let i = 0; i < tags.length; i += 1) {
    if (tags[i].tag in data) {
      data[tags[i].tag].count += (100 / tasks.length);
    } else {
      data[tags[i].tag] = {
        fill: tags[i].color,
        name: tags[i].tag,
        count: (100 / tasks.length),
      };
    }
  }

  return Object.values(data).sort((a, b) => (a.count < b.count ? 1 : -1));
};

const SideBar = ({ tasks }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Typography className={classes.heading} variant="h4">Backlog Overview</Typography>
      <ResponsiveContainer height={300}>
        <BarChart
          layout="vertical"
          barCategoryGap="20%"
          data={radialBarChartData(tasks)}
          isAnimationActive={false}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis type="number" dataKey="count" domain={[0, 100]} />
          <YAxis type="category" dataKey="name" width={120} />
          <Tooltip cursor={{ fill: '#e0e0e0' }} />
          <Bar dataKey="count" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.list,
});

export default connect(
  mapStateToProps,
  null,
)(SideBar);
