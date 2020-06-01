import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import MetricItem from '../../components/Metrics/MetricItem';


const useStyles = makeStyles((theme) => ({
  heading: {
    marginBottom: '30px',
  },
  container: {
    width: '200px',
    background: '#fafafa',
    position: 'fixed',
    top: '44px',
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'flex-start',
    alignItems: 'center',
    padding: '50px 0',
  },
}));

const nTasks = (tasks, nDays) => (
  tasks.filter((task) => {
    if (task.actions.length === 0) {
      return false;
    }

    const lastAction = task.actions[task.actions.length - 1];
    if (lastAction.type !== 'Finished') {
      return false;
    }

    const today = new Date();
    const afterDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    ) - nDays * 24 * 3600 * 1000;

    if (new Date(lastAction.date).getTime() < afterDate) {
      return false;
    }

    return true;
  }).length
);

const getCompletedTasks = (tasks) => (
  tasks.filter((task) => {
    if (task.actions.length === 0) {
      return false;
    }

    const lastAction = task.actions[task.actions.length - 1];
    if (['Finished', 'Archived'].indexOf(lastAction.type) < 0) {
      return false;
    }

    const today = new Date();
    const afterDate = new Date(
      today.getFullYear(),
      today.getMonth(),
    );

    if (new Date(lastAction.date).getTime() < afterDate) {
      return false;
    }

    return true;
  })
);


const SideBar = ({ tasks }) => {
  const classes = useStyles();
  const completedTasks = getCompletedTasks(tasks);

  return (
    <div className={classes.container}>
      <MetricItem description="Number of tasks completed today" score={nTasks(tasks, 0)} />
      <MetricItem description="Number of tasks completed last 10 days" score={nTasks(tasks, 9)} />
      { completedTasks.length > 0 && (
        <MetricItem
          description="Percentage of finished tasks this month"
          score={Math.round(100 * (completedTasks.filter((task) => task.actions[task.actions.length - 1].type === 'Finished').length / completedTasks.length))}
          unit="%"
        />
      )}
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
