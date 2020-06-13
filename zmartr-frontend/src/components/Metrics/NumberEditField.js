import React from 'react';
import { Typography, makeStyles, TextField } from '@material-ui/core';
import { connect } from 'react-redux';
import { addMetricSetting } from '../../redux/actions/stats';

const useStyles = makeStyles((theme) => ({
  description: {
    color: 'gray',
    '&:hover': {
      color: '#3f3f44',
    },
  },
}));

const NumberEditField = ({ index, number, variant, addMetricSetting }) => {
  const classes = useStyles();
  const [edit, setEdit] = React.useState(false);
  const startEdit = () => { setEdit(true); };

  const [currentNumber, setCurrentNumber] = React.useState(number);
  const textChange = (event) => { setCurrentNumber(event.target.value); };
  const textClose = (event) => {
    if (event.keyCode === 13 && Number(currentNumber)) {
      addMetricSetting(index, { nDays: Number(currentNumber) });
      setEdit(false);
    } else if (event.keyCode === 13) {
      setCurrentNumber(number);
      setEdit(false);
    }
  };

  const renderContent = () => {
    if (edit) {
      return (
        <TextField
          style={{ width: currentNumber.length * 7 }}
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: '11px',
              padding: '0px !important',
              color: '#3f3f44',
              fontWeight: '400',
              lineHeight: '13px',
              letterSpacing: '0.33px',
            },
          }}
          inputProps={{
            style: {
              padding: '0px',
              textAlign: 'center',
            },
          }}
          className={classes.editField}
          defaultValue={currentNumber}
          onChange={textChange}
          onKeyDown={textClose}
          autoFocus
        />
      );
    }

    return (
      <Typography onClick={startEdit} variant={variant} className={classes.description}>
        {currentNumber}
      </Typography>
    );
  };

  return (
    <div style={{ display: 'inline-block' }}>
      {renderContent()}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMetricSetting: (index, setting) => {
    dispatch(addMetricSetting(index, setting));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(NumberEditField);
