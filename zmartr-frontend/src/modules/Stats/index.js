import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  statsContainer: {
    flex: 1,
    background: theme.palette.background.gray,
    padding: '50px',
  },
  statsComponent: {
    border: '2px dashed gray',
  },
}));

const Stats = () => {
  const classes = useStyles();

  return (
    <div className={classes.statsContainer}>
      <Grid container spacing={3}>
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
          className={classes.statsComponent}
        />
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
          className={classes.statsComponent}
        />
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
          className={classes.statsComponent}
        />
        <Grid
          item
          xs={12}
          sm={6}
          md={6}
          lg={4}
          xl={3}
          className={classes.statsComponent}
        />
      </Grid>
    </div>
  );
};

export default connect(
  null,
  null,
)(Stats);
