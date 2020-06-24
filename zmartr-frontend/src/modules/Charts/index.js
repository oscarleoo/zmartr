import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    background: theme.palette.background.white,
  },
}));

const Charts = ({ charts }) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      {/* <Charts /> */}
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
