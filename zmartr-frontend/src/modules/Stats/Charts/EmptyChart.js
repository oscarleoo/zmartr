import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Button, IconButton } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { addChart } from '../../../redux/actions/stats';


const useStyles = makeStyles((theme) => ({
  container: {
    opacity: 0,
    height: '100%',
    width: '100%',
    borderRadius: '14px',
    cursor: 'pointer',
    '&:hover': {
      opacity: 1,
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
    <div className={classes.container}>
      <IconButton className={classes.button} onClick={addChart(index)}>
        <AddIcon fontSize="large" className={classes.addIcon} />
      </IconButton>
    </div>
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
