import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { makeStyles, Typography, IconButton } from '@material-ui/core';
import DoubleArrowIcon from '@material-ui/icons/DoubleArrow';
import DragIndicatorIcon from '@material-ui/icons/DragIndicator';
import { startTask } from '../../../redux/actions/tasks';

const useStyles = makeStyles((theme) => ({
  taskItem: {
    padding: '5px 15px',
    marginBottom: '10px',
    display: 'flex',
    justifyContent: 'space-between',
    borderRadius: '5px',
    cursor: 'pointer',
    alignItems: 'center',
    '&:hover': {
      background: '#A8DDEA',
      transition: 'background 200ms linear',
      '& $focusIconContainer': {
        color: theme.palette.secondary.main,
        transition: 'color 700ms linear',
      },
    },
  },
  taskCotainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  taskText: {
    marginRight: '30px',
    marginLeft: '20px',
  },
  focusIconContainer: {
    color: theme.palette.background.gray,
  },
  focusIcon: {
    fontSize: '50px',
  },
  dragIcon: {
    color: theme.palette.secondary.main,
    '&:hover': {
      color: theme.palette.primary.main,
      transition: 'color 100ms linear',
    },
  },
}));

const getItemStyle = (isDragging, draggableStyle) => ({
  ...draggableStyle,
  ...(isDragging && {
    background: '#A8DDEA',
  }),
});

const getDragIconStyle = (isDragging) => ({
  ...(isDragging && {
    color: '#F27D42',
  }),
});

const Task = ({ task, index, focusOnTask }) => {
  const classes = useStyles();

  return (
    <Draggable draggableId={task._id} index={index}>
      {(provided, snapshot) => (
        <div
          {...provided.draggableProps}
          ref={provided.innerRef}
          className={classes.taskItem}
          onClick={focusOnTask(task._id)}
          style={getItemStyle(
            snapshot.isDragging,
            provided.draggableProps.style,
          )}
        >
          <div className={classes.taskCotainer}>
            <div
              {...provided.dragHandleProps}
              className={classes.dragIcon}
              style={getDragIconStyle(
                snapshot.isDragging,
                provided.draggableProps.style,
              )}
            >
              <DragIndicatorIcon fontSize="large" />
            </div>
            <Typography variant="subtitle1" className={classes.taskText}>
              {task.title}
            </Typography>
          </div>
          <IconButton onClick={focusOnTask(task._id)} className={classes.focusIconContainer}>
            <DoubleArrowIcon className={classes.focusIcon} />
          </IconButton>
        </div>
      )}
    </Draggable>
  );
};

Task.propTypes = {
  task: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  index: PropTypes.number.isRequired,
  focusOnTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  focusOnTask: (taskId) => () => dispatch(startTask(taskId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Task);
