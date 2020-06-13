import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Filter from './Filter';
import Charts from './Charts';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    background: theme.palette.background.white,
  },
}));

const Stats = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <Filter />
      <Charts />
    </div>
  );
};

export default Stats;
