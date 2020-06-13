import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Button } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { addChart } from '../../../redux/actions/stats';


const useStyles = makeStyles((theme) => ({
  container: {
    opacity: 0,
    background: '#f0f0f0',
    height: '100%',
    width: '100%',
    borderRadius: '14px',
    border: '3px dashed lightgray',
    cursor: 'pointer',
    '&:hover': {
      opacity: 1,
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


const EmptyChart = ({ index, addChart }) => {
  const classes = useStyles();

  return (
    <Button className={classes.container} onClick={addChart(index)}>
      <AddIcon fontSize="large" className={classes.addIcon} />
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addChart: (index) => () => {
    dispatch(addChart(index));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(EmptyChart);
