import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles, Typography, Checkbox } from '@material-ui/core';
import { useAuth0 } from '../../auth0/react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  container: {
    margin: '20px 0 40px 0',
    border: '3px dashed #c0c0c0',
    padding: '30px 0 30px 10px',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
  taskText: {
    fontSize: '18px',
    marginLeft: '5px',
  },
}));


const SelectedTask = ({ selectedTask }) => {
  const classes = useStyles();
  const [checked, setChecked] = React.useState(false);
  const { getTokenSilently } = useAuth0();

  const handleChange = (event) => {
    setChecked(event.target.checked);
  };

  const renderText = () => {
    if (selectedTask) {
      return selectedTask.title;
    }
    return "Haven't selected any task to focus on...";
  };

  return (
    <div className={classes.container}>
      { selectedTask && (
        <Checkbox
          checked={checked}
          onChange={handleChange}
          inputProps={{ 'aria-label': 'primary checkbox' }}
        />
      )}
      <Typography variant="subtitle1" className={classes.taskText}>
        {renderText()}
      </Typography>
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
