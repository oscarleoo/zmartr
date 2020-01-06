import React from 'react';
import { connect } from 'react-redux';

import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';

import { createTask } from '../../redux/actions/tasks';
import TaskDragAndDrop from './TaskDragAndDrop';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    position: 'relative',
    flexDirection: 'column',
    background: theme.palette.background.gray,
    justifyContent: 'flex-end',
  },
  listContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    marginTop: '50px',
    marginBottom: '50px',
    overflow: 'scroll',
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: '100px',
    left: 0,
  },
  actionBar: {
    flex: '0 0 100px',
    margin: '0 5% 0 5%',
    borderTop: '2px dashed #05386b',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  input: {
    flex: 1,
  },
  button: {
    marginLeft: '30px',
    height: '50px',
    width: '120px',
  },
}));

const List = ({ tasks, createTask }) => {
  const classes = useStyles();
  const state = { newTask: '' };

  const handleNewTaskCange = (event) => { state.newTask = event.target.value; };
  const addNewTask = () => { createTask(state.newTask); };
  const addNewTaskEnter = (event) => {
    if (event.keyCode === 13) {
      createTask(state.newTask);
    }
  };

  return (
    <div className={classes.container}>
      <div className={classes.listContainer}>
        <TaskDragAndDrop tasks={tasks} />
      </div>
      <div className={classes.actionBar}>
        <TextField
          className={classes.input}
          label="New Task"
          variant="outlined"
          color="secondary"
          id="mui-theme-provider-outlined-input"
          autoComplete="off"
          onChange={handleNewTaskCange}
          onKeyDown={addNewTaskEnter}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          onClick={addNewTask}
        >
          Add Task
        </Button>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.list,
});

const mapDispatchToProps = (dispatch) => ({
  createTask: (newTask) => dispatch(createTask(newTask)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(List);
