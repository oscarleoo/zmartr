import React from 'react';
import { Draggable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core';
import PlayIcon from '@material-ui/icons/PlayCircleOutline';
import DismissIcon from '@material-ui/icons/DeleteOutline';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import TaskItem from './TaskItem';
import TaskAction from '../../../../../components/Actions/TaskAction';
import { startTask, archiveTask } from '../../../../../redux/actions/tasks';

const useStyles = makeStyles((theme) => ({
  taskItem: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover': {
      '& $dragIcon': {
        color: theme.palette.text.primary,
      },
    },
  },
  taskContainer: {
    flex: '1',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  dragIcon: {
    color: '#b0b0b0',
  },
}));

const getItemStyle = (isDragging, draggableStyle) => ({
  ...draggableStyle,
  ...(isDragging && {
    background: '#e0e0e0',
  }),
});

const getDragIconStyle = (isDragging) => ({
  ...(isDragging && {
    color: '#3f3f44',
  }),
});

const Task = ({ task, index }) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={classes.taskItem}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style,
          )}
        >
          <div style={task.selected ? { display: 'None' } : {}} className={classes.taskContainer}>
            <div
              {...provided.dragHandleProps}
              className={classes.dragIcon}
              style={getDragIconStyle(
                snapshot.isDragging,
                provided.draggableProps.style,
              )}
            >
              <DragIndicatorIcon />
            </div>
            <TaskItem task={task}>
              <TaskAction taskId={task._id} action={startTask} Icon={PlayIcon} />
              <TaskAction taskId={task._id} action={archiveTask} Icon={DismissIcon} />
            </TaskItem>
          </div>
        </div>
      )}
    </Draggable>
  );
};

// Task.propTypes = {
//   task: PropTypes.exact({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     selected: PropTypes.bool.isRequired,
//   }).isRequired,
//   index: PropTypes.number.isRequired,
//   focusOnTask: PropTypes.func.isRequired,
//   key: PropTypes.string.isRequired,
// };


export default Task;
