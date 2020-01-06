import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import Selected from './Selected';
import List from './List';
import { getTasks } from '../../redux/actions/tasks';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
  },
}));

const Tasks = ({ selectedTask, loadTasks }) => {
  const classes = useStyles();

  const renderView = () => {
    if (selectedTask) {
      return <Selected task={selectedTask} />;
    }
    loadTasks();
    return <List />;
  };

  return (
    <div className={classes.container}>
      {renderView()}
    </div>
  );
};

Tasks.propTypes = {
  selectedTask: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
  loadTasks: PropTypes.func.isRequired,
};

const mapStateToProps = (state) => ({
  selectedTask: state.tasks.selected,
});

const mapDispatchToProps = (dispatch) => ({
  loadTasks: () => dispatch(getTasks()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tasks);
