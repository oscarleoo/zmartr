import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Checkbox } from '@material-ui/core';
import { useAuth0 } from '../../auth0/react-auth0-spa';

const useStyles = makeStyles((theme) => ({

}));


const SelectedTask = ({ selectedTask }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();

  return (
    <div className={classes.container}>
      
    </div>
  );
};

SelectedTask.propTypes = {
  selectedTask: PropTypes.exact({
    _id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
  }).isRequired,
};

const mapStateToProps = (state) => ({
  selectedTask: state.tasks.selected,
});

// const mapDispatchToProps = (dispatch) => ({
//   focusOnTask: (taskId, getToken) => async () => {
//     const token = await getToken();
//     dispatch(startTask(taskId, token));
//   },
// });

export default connect(
  mapStateToProps,
  null,
)(SelectedTask);
