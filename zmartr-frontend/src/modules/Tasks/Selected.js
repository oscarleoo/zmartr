import React from 'react';
import { connect } from 'react-redux';
import { IconButton, Tooltip, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import FlagIcon from '@material-ui/icons/FlagTwoTone';
import StopIcon from '@material-ui/icons/HighlightOffRounded';
import DeleteIcon from '@material-ui/icons/DeleteOutline';

import { stopTask, finishTask, archiveTask } from '../../redux/actions/tasks';

const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    background: theme.palette.background.gray,
    display: 'flex',
    flexDirection: 'column',
  },
  taskContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '50px',
    marginBottom: '50px',
  },
  task: {
    fontSize: '70px',
    lineHeight: '90px',
    maxWidth: '1000px',
    color: theme.palette.secondary.main,
  },
  actionBar: {
    flex: '0 0 100px',
    margin: '0 5% 0 5%',
    borderTop: '2px dashed #05386b',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
}));

const Selected = ({
  task, stopTask, finishTask, archiveTask,
}) => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.taskContainer}>
        <Typography variant="h1" align="center" className={classes.task}>{task.title}</Typography>
      </div>
      <div className={classes.actionBar}>
        <div>
          <Tooltip title="Paus Task" enterDelay={200}>
            <IconButton onClick={stopTask(task._id)}>
              <StopIcon style={{ fontSize: 50, color: '#022449' }} />
            </IconButton>
          </Tooltip>
          <Tooltip title="Archive Task" enterDelay={200}>
            <IconButton onClick={archiveTask(task._id)}>
              <DeleteIcon style={{ fontSize: 50, color: '#F27D42' }} />
            </IconButton>
          </Tooltip>
        </div>
        <Tooltip title="Finish Task" enterDelay={200}>
          <IconButton onClick={finishTask(task._id)}>
            <FlagIcon style={{ fontSize: 50, color: '#558DCA' }} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  stopTask: (taskId) => () => dispatch(stopTask(taskId)),
  archiveTask: (taskId) => () => dispatch(archiveTask(taskId)),
  finishTask: (taskId) => () => dispatch(finishTask(taskId)),
});

export default connect(
  null,
  mapDispatchToProps,
)(Selected);
