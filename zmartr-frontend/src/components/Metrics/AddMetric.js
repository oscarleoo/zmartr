import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AddIcon from '@material-ui/icons/Add';
import { Button } from '@material-ui/core';
import { connect } from 'react-redux';
import { addMetric } from '../../redux/actions/stats';

const useStyles = makeStyles((theme) => ({
  addMetricContainer: {
    height: '100px',
    width: '100px',
    borderRadius: '14px',
    border: '3px dashed lightgray',
    cursor: 'pointer',
    '&:hover': {
      border: '3px dashed gray',
      '& $addIcon': {
        color: 'gray',
      },
    },
  },
  addIcon: {
    color: 'lightgray',
  },
}));


const AddMetric = ({ addMetric }) => {
  const classes = useStyles();

  return (
    <Button className={classes.addMetricContainer} onClick={addMetric}>
      <AddIcon fontSize="large" className={classes.addIcon} />
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addMetric: () => {
    dispatch(addMetric());
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AddMetric);
