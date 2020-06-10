import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Typography, TextField } from '@material-ui/core';
import EditIcon from '@material-ui/icons/EditOutlined';
import { updateAction } from '../../redux/actions/history';
import { useAuth0 } from '../../auth0/react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    alignItems: 'center',
  },
  text: {
    fontSize: '14px',
  },
  icon: {
    fontSize: '16px',
    cursor: 'pointer',
    padding: '7px',
  },
  editField: {
    fontSize: '14px',
    fontWeight: '400',
    lineHeight: '21px',
    letterSpacing: '0.00938em',
    height: '28px',
  },
}));

const dateFormatIsValid = (dateString) => {
  const splits = dateString.split(' ');
  if (splits.length !== 2) { return false; }

  const dateSplit = splits[0].split('-');
  const timeSplit = splits[1].split(':');
  if (dateSplit.length !== 3) { return false; }
  if (timeSplit.length !== 3) { return false; }

  for (let i = 0; i < 3; i += 1) {
    if (isNaN(dateSplit[i]) || isNaN(timeSplit[i])) {
      return false;
    }
  }

  if (!Date.parse(dateString)) { return false; }

  return true;
};

const createDateString = (date) => {
  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth() + 1}`).slice(-2);
  const year = date.getFullYear();

  const hours = (`0${date.getHours()}`).slice(-2);
  const minutes = (`0${date.getMinutes()}`).slice(-2);
  const seconds = (`0${date.getSeconds()}`).slice(-2);

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
};

const HistoryDateField = ({ action, updateAction }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();
  const [edit, setEdit] = React.useState(false);
  const editClick = () => { setEdit(true); };
  const [currentDate, setCurrentDate] = React.useState(createDateString(new Date(action.date)));
  const [showEditIcon, setShowEditIcon] = React.useState(false);
  const showEdit = () => { setShowEditIcon(true); };
  const hideEdit = () => { setShowEditIcon(false); };

  const keyDownEvent = (event) => {
    const newDate = event.target.value;
    if (event.keyCode === 13 && dateFormatIsValid(newDate)) {
      setCurrentDate(newDate);
      updateAction(action._id, action.index, new Date(newDate), getTokenSilently);
      setEdit(false);
    } else if (event.keyCode === 13) {
      setEdit(false);
    }
  };

  const renderTextField = () => {
    if (edit) {
      return (
        <TextField
          id="standard-basic"
          variant="outlined"
          autoComplete="off"
          autoFocus
          defaultValue={currentDate}
          onKeyDown={keyDownEvent}
          fullWidth
          InputProps={{
            className: classes.editField,
          }}
        />
      );
    }
    return (
      <div className={classes.container} onMouseEnter={showEdit} onMouseLeave={hideEdit}>
        {showEditIcon && <EditIcon className={classes.icon} onClick={editClick} />}
        <Typography className={classes.text}>{currentDate}</Typography>
      </div>
    );
  };

  return (
    <div>
      {renderTextField()}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  updateAction: async (taskId, actionIndex, date, getToken) => {
    const token = await getToken();
    dispatch(updateAction(taskId, actionIndex, date, token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(HistoryDateField);
