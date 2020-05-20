import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    maxWidth: '500px',
    minWidth: '300px',
    display: 'flex',
    flexDirection: 'column',
    padding: '40px',
    background: '#fafafa',
  },
  listContainer: {
    flex: 1,
    display: 'flex',
  },
}));

const SideBar = ({ tasks }) => {
  const classes = useStyles();

  return (
    <div className={classes.container} />
  );
};

const mapStateToProps = (state) => ({
  tasks: state.tasks.list,
});

export default connect(
  mapStateToProps,
  null,
)(SideBar);
