import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import ChartContainer from './Charts/ChartContainer';


const useStyles = makeStyles((theme) => ({
  chartsWrapper: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    position: 'relative',
  },
}));


const Charts = ({ charts }) => {
  const classes = useStyles();
  const currentIndex = 0;

  return (
    <div className={classes.chartsWrapper}>
      <ChartContainer chart={charts[currentIndex]} index={currentIndex} />
    </div>
  );
};


const mapStateToProps = (state) => ({
  charts: state.stats.charts,
});


export default connect(
  mapStateToProps,
  null,
)(Charts);
