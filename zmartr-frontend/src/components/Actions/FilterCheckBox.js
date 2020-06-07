import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Checkbox, Typography } from '@material-ui/core';
import CircleChecked from '@material-ui/icons/CheckCircle';
import CircleUnchecked from '@material-ui/icons/RadioButtonUnchecked';

const useStyles = makeStyles((theme) => ({
  tagContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '14px',
  },
  checkBox: {
    padding: '0',
    marginRight: '14px',
  },
}));


const FilterCheckbox = ({ title, color, isChecked, addAction, removeAction, performAction }) => {
  const classes = useStyles();
  const updateFilter = (text) => () => {
    if (isChecked) {
      performAction(removeAction);
    } else {
      performAction( addAction);
    }
  };

  return (
    <div className={classes.tagContainer}>
      <Checkbox
        checked={isChecked}
        icon={<CircleUnchecked style={{ color }} />}
        checkedIcon={<CircleChecked style={{ color }} />}
        inputProps={{ 'aria-label': 'primary checkbox' }}
        className={classes.checkBox}
        onChange={updateFilter(title)}
      />
      <Typography>{title}</Typography>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  performAction: (action) => (
    dispatch(action())
  ),
});

export default connect(
  null,
  mapDispatchToProps,
)(FilterCheckbox);
