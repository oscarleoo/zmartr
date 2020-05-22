import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {
  makeStyles, Typography, IconButton, TextField,
} from '@material-ui/core';
import EditIcon from '@material-ui/icons/EditTwoTone';
import { updateTaskTitle } from '../../redux/actions/tasks';
import { useAuth0 } from '../../auth0/react-auth0-spa';


const useStyles = makeStyles((theme) => ({
  textContainer: {
    width: '100%',
    display: 'flex',
    '&:hover': {
      '& $editButton': {
        color: theme.palette.text.dark,
        transition: 'color 100ms linear',
      },
    },
  },
  textField: {
    width: '100%',
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    color: theme.palette.text.dark,
    fontSize: '14px',
  },
  editButton: {
    marginLeft: '5px',
    color: theme.palette.text.light,
    padding: '3px',
  },
  editIcon: {
    fontSize: '20px',
  },
  editField: {
    height: '35px',
    width: '100%',
  },
}));


const TaskTextField = ({ taskId, taskText, updateTask }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();
  const [edit, setEdit] = React.useState(taskText.length === 0);
  const [text, setText] = React.useState(taskText);
  const changeEdit = () => { setEdit(!edit); };

  const editTaskEvent = (event) => {
    if (event.keyCode === 13) {
      updateTask(taskId, event.target.value, getTokenSilently);
      setText(event.target.value);
      setEdit(false);
    }
  };

  const renderTextField = () => {
    if (edit) {
      return (
        <div className={classes.textField}>
          <TextField
            id="standard-basic"
            variant="outlined"
            autoComplete="off"
            defaultValue={text}
            onKeyDown={editTaskEvent}
            fullWidth
            InputProps={{
              className: classes.editField,
            }}
          />
        </div>
      );
    }
    return (
      <div className={classes.textField}>
        <Typography variant="body1" className={classes.text}>
          {text}
        </Typography>
        <IconButton className={classes.editButton} onClick={changeEdit}>
          <EditIcon className={classes.editIcon} />
        </IconButton>
      </div>
    );
  };

  return (
    <div className={classes.textContainer}>
      {renderTextField()}
    </div>
  );
};

TaskTextField.propTypes = {
  taskId: PropTypes.string.isRequired,
  taskText: PropTypes.string.isRequired,
  updateTask: PropTypes.func.isRequired,
};

const mapDispatchToProps = (dispatch) => ({
  updateTask: async (taskId, title, getToken) => {
    const token = await getToken();
    dispatch(updateTaskTitle(taskId, title, token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(TaskTextField);
