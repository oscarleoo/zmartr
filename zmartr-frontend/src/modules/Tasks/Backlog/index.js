import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Collapse, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { createTask } from '../../../redux/actions/tasks';
import TaskDragAndDrop from './TaskDragAndDrop';


const useStyles = makeStyles((theme) => ({
  actionBar: {
    display: 'flex',
    justifyContent: 'space-between',
    borderBottom: '1px solid gray',
    padding: '15px 10px',
    height: '40px',
  },
  addButton: {
    height: '40px',
    width: '40px',
    padding: '0',
    border: '2px solid gray',
  },
  backlog: {
    justifyContent: 'space-between',
    textTransform: 'none',
    padding: 0,
    width: '100%',
  },
  addNewTask: {
    marginTop: '20px',
    marginBottom: '0',
    marginLeft: '35px',
    display: 'flex',
    alignItems: 'center',
    textTransform: 'none',
    padding: '15px 30px 15px 20px',
  },
  addNewTaskText: {
    marginLeft: '10px',
  },
}));

const Backlog = ({ tasks, createEmptyTask }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleClick = () => {
    setOpen(!open);
  };


  return (
    <div>
      <Button
        onClick={handleClick}
        disableRipple
        style={{ backgroundColor: 'transparent' }}
        className={classes.backlog}
      >
        <Typography variant="h4">Backlog</Typography>
        {open ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
      </Button>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <TaskDragAndDrop tasks={tasks} />
        <Button
          onClick={createEmptyTask}
          disableRipple
          className={classes.addNewTask}
        >
          <AddIcon />
          <Typography variant="subtitle1" className={classes.addNewTaskText}>
            Add new task
          </Typography>
        </Button>
      </Collapse>
    </div>
  );
};


const mapDispatchToProps = (dispatch) => ({
  createEmptyTask: async () => {
    dispatch(createTask());
  },
});

export default connect(
  mapDispatchToProps,
)(Backlog);
