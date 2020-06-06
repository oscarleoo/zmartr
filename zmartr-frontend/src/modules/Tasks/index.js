import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import SideBar from './SideBar';
import SelectedTask from './SelectedTask';
import Backlog from './Backlog';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    background: theme.palette.background.white,
  },
  tasksContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.white,
    justifyContent: 'flex-start',
    margin: '50px 200px 50px 5%',
    paddingRight: '5%',
  },
}));


const Tasks = ({ tasks }) => {
  const classes = useStyles();
  const selectedTasks = tasks.filter((task) => (task.selected));
  const activeTasks = tasks.filter((task) => (
    task.actions.length === 0 || ['Finished', 'Archived'].indexOf(task.actions[task.actions.length - 1].type) < 0
  ));

  return (
    <div className={classes.container}>
      <div className={classes.tasksContainer}>
        <SelectedTask tasks={selectedTasks} />
        <Backlog tasks={activeTasks} />
      </div>
      <SideBar />
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.list,
});

export default connect(
  mapStateToProps,
  null,
)(Tasks);
