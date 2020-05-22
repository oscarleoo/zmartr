import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import { makeStyles } from '@material-ui/core/styles';
import { orderTasks, startTask } from '../../../redux/actions/tasks';
import Task from './TaskItem';
import { useAuth0 } from '../../../auth0/react-auth0-spa';
import TaskAction from '../../../components/Actions/TaskAction';

const useStyles = makeStyles({
  taskContainer: {
    flex: 1,
    marginTop: '20px',
  },
  loaderContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

const TaskDragAndDrop = ({ tasks, searchString, selectedTask, saveOrder }) => {
  const classes = useStyles();
  const taskList = Array.from(tasks);
  const { getTokenSilently } = useAuth0();

  const onDragEnd = (result) => {
    if (!result.destination) {
      return;
    }

    const startIndex = result.source.index;
    const endIndex = result.destination.index;
    const [removed] = taskList.splice(startIndex, 1);
    taskList.splice(endIndex, 0, removed);
    saveOrder(taskList.map((task) => task._id), getTokenSilently);
  };

  const displayTasks = () => (
    <Droppable droppableId="droppable">
      {(provided) => (
        <div
          {...provided.droppableProps}
          ref={provided.innerRef}
          className={classes.taskContainer}
        >
          {taskList.filter((task) => {
            const titleIncludes = task.title.toLowerCase().includes(searchString);
            const tagIncludes = task.tags.filter((tag) => (tag.tag.includes(searchString))).length > 0;
            return (titleIncludes || tagIncludes) && !task.selected;
          }).map((task, index) => <Task key={task._id} task={task} index={index} />)}
          {provided.placeholder}
        </div>
      )}
    </Droppable>
  );

  return (
    <DragDropContext onDragEnd={onDragEnd}>
      {displayTasks()}
    </DragDropContext>
  );
};

// TaskDragAndDrop.propTypes = {
//   tasks: PropTypes.arrayOf(PropTypes.exact({
//     _id: PropTypes.string.isRequired,
//     title: PropTypes.string.isRequired,
//     selected: PropTypes.bool.isRequired,
//   })).isRequired,
//   saveOrder: PropTypes.func.isRequired,
//   searchString: PropTypes.string.isRequired,
// };

const mapStateToProps = (state) => ({
  tasks: state.tasks.list,
  selectedTask: state.tasks.selected,
  isLoading: state.tasks.loading,
  searchString: state.tasks.searchString,
});

const mapDispatchToProps = (dispatch) => ({
  saveOrder: async (taskIds, getToken) => {
    const token = await getToken();
    dispatch(orderTasks(taskIds, token));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TaskDragAndDrop);
