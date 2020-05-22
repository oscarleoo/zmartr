import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Checkbox, Typography } from '@material-ui/core';
import PausIcon from '@material-ui/icons/PauseCircleOutline';
import DismissIcon from '@material-ui/icons/NotInterested';
import CircleChecked from '@material-ui/icons/CheckCircleOutline';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';
import TaskItem from './TaskDragAndDrop/TaskItem/TaskItem';
import { stopTask, archiveTask, finishTask } from '../../redux/actions/tasks';
import TaskAction from '../../components/Actions/TaskAction';
import { useAuth0 } from '../../auth0/react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  taskItem: {
    display: 'flex',
    padding: '10px 0',
    justifyContent: 'space-between',
    margin: '10px 0 40px 0',
    alignItems: 'center',
    '&:hover': {
      '& $iconContainer': {
        color: theme.palette.background.gray,
        transition: 'color 100ms linear',
      },
    },
  },
  flexChild: {
    flex: 1,
    marginRight: '50px',
    marginLeft: '20px',
  },
  checkBox: {
    padding: '0',
  },
}));


const SelectedTask = ({ tasks, completeTask }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();
  const selectedTasks = tasks.filter((task) => {return task.selected});

  return (
    <div className={classes.selectedTasks}>
      {selectedTasks.length > 0 && <Typography variant="h4">Active Task</Typography>}
      {selectedTasks.map((task, index) => {
        return (
          <div className={classes.taskItem} key={task._id}>
            <Checkbox
              icon={<CircleUnchecked />}
              checkedIcon={<CircleChecked />}
              inputProps={{ 'aria-label': 'primary checkbox' }}
              className={classes.checkBox}
              onChange={completeTask(task._id, getTokenSilently)}
            />
            <TaskItem task={task}>
              <TaskAction taskId={task._id} action={stopTask} Icon={PausIcon} />
              <TaskAction taskId={task._id} action={archiveTask} Icon={DismissIcon} />
            </TaskItem>
          </div>
        );
      })}
    </div>
  );
};

// SelectedTask.propTypes = {
//   selectedTask: PropTypes.exact({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     selected: PropTypes.bool.isRequired,
//   }).isRequired,
// };

const mapStateToProps = (state) => ({
  tasks: state.tasks.list,
});

const mapDispatchToProps = (dispatch) => ({
  completeTask: (taskId, getToken) => async () => {
    const token = await getToken();
    dispatch(finishTask(taskId, token));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(SelectedTask);
