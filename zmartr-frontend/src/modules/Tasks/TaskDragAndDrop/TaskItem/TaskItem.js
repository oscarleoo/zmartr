import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, IconButton } from '@material-ui/core';
import PlayIcon from '@material-ui/icons/PlayCircleOutlineOutlined';
import NotInterestedIcon from '@material-ui/icons/NotInterested';
import { startTask, stopTask } from '../../../../redux/actions/tasks';
import { useAuth0 } from '../../../../auth0/react-auth0-spa';
import Tags from '../../../../components/Tags';
import TaskTextField from '../../../../components/TaskTextField';

const useStyles = makeStyles((theme) => ({
  taskItemContainer: {
    flex: 1,
    display: 'flex',
    marginLeft: '20px',
    borderBottom: '1px solid #f0f0f0',
  },
  taskItem: {
    flex: 1,
    display: 'flex',
    padding: '10px 0',
    justifyContent: 'space-between',
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
  },
  iconContainer: {
    color: theme.palette.text.light,
    padding: '6px',
  },
  icon: {
    fontSize: '20px',
  },
}));


const TaskItem = ({ task, focusOnTask }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();

  return (
    <div className={classes.taskItemContainer}>
      <div className={classes.taskItem}>
        <div className={classes.flexChild}>
          <TaskTextField taskId={task._id} taskText={task.title} isEditing={false} />
          <Tags task={task} />
        </div>
        <div className={classes.actions}>
          <IconButton
            className={classes.iconContainer}
            onClick={focusOnTask(task._id, getTokenSilently)}
          >
            <PlayIcon className={classes.icon} />
          </IconButton>
          <IconButton className={classes.iconContainer}>
            <NotInterestedIcon className={classes.icon} />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

// TaskItem.propTypes = {
//   task: PropTypes.exact({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     selected: PropTypes.bool.isRequired,
//   }).isRequired,
//   focusOnTask: PropTypes.func.isRequired,
// };

const mapDispatchToProps = (dispatch) => ({
  focusOnTask: (taskId, getToken) => async () => {
    const token = await getToken();
    dispatch(startTask(taskId, token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(TaskItem);
