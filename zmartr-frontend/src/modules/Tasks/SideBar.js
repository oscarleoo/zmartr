import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import EmptyMetric from '../../components/Metrics/EmptyMetric';
import AddMetric from '../../components/Metrics/AddMetric';
import MetricItem from '../../components/Metrics/MetricItem';


const useStyles = makeStyles((theme) => ({
  container: {
    width: '200px',
    background: '#fafafa',
    position: 'fixed',
    top: '44px',
    right: 0,
    bottom: 0,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    alignItems: 'center',
    padding: '3% 0',
    '&:hover': {
      '& $addWrapper': {
        opacity: 1,
        transition: 'opacity 100ms linear',
      },
    },
  },
  addWrapper: {
    opacity: 0,
  },
}));

const SideBar = ({ tasks, metrics }) => {
  const classes = useStyles();
  const nEmpty = Math.max(0, 4 - metrics.length);

  return (
    <div className={classes.container}>
      {metrics.map((metric, index) => (<MetricItem metric={metric} index={index} />))}
      { metrics.length < 5 && <div className={classes.addWrapper}><AddMetric /></div> }
      { [...Array(nEmpty)].map(() => <EmptyMetric />) }
    </div>
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.list,
  metrics: state.stats.metrics,
});

export default connect(
  mapStateToProps,
  null,
)(SideBar);
