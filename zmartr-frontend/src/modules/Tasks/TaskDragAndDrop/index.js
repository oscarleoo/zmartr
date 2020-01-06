import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
import { CircularProgress } from '@material-ui/core';
import { orderTasks } from '../../../redux/actions/tasks';
import Task from './Task';

const useStyles = makeStyles({
  taskContainer: {
    flex: 1,
    maxWidth: '900px',
  },
  loaderContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TaskDragAndDrop = ({ tasks, saveOrder, isLoading }) => {
  const classes = useStyles();
  const taskList = Array.from(tasks);

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const [removed] = taskList.splice(startIndex, 1);
    taskList.splice(endIndex, 0, removed);
    saveOrder(taskList.map((task) => task._id));
  };

  const displayTasks = () => {
    if (isLoading) {
      return (
        <div className={classes.loaderContainer}>
          <CircularProgress />
        </div>
      );
    }
    return (
      <Droppable droppableId="droppable">
        {(provided) => (
          <div
            {...provided.droppableProps}
            ref={provided.innerRef}
            className={classes.taskContainer}
          >
            {taskList.map((task, index) => <Task key={task._id} task={task} index={index} />)}
            {provided.placeholder}
          </div>
        )}
      </Droppable>
    );
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {displayTasks()}
    </DragDropContext>
  );
};

TaskDragAndDrop.propTypes = {
  tasks: PropTypes.arrayOf(PropTypes.exact({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  })).isRequired,
  saveOrder: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
};

const mapStateToProps = (state) => ({
  isLoading: state.tasks.loading,
});

const mapDispatchToProps = (dispatch) => ({
  saveOrder: (taskIds) => dispatch(orderTasks(taskIds)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskDragAndDrop);
