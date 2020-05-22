import React from 'react';
import { makeStyles } from '@material-ui/core';
import Tags from '../../../../components/Tags';
import TaskTextField from '../../../../components/TaskTextField';

const useStyles = makeStyles((theme) => ({
  taskItemContainer: {
    flex: 1,
    display: 'flex',
    marginLeft: '20px',
    borderBottom: '1px solid #f0f0f0',
  },
  taskItem: {
    flex: 1,
    display: 'flex',
    padding: '10px 0',
    justifyContent: 'space-between',
    alignItems: 'center',
    '&:hover': {
      '& $actions': {
        color: 'gray',
        // transition: 'color 100ms linear',
      },
    },
  },
  flexChild: {
    flex: 1,
    marginRight: '50px',
  },
  actions: {
    color: theme.palette.text.light,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
  },
  icon: {
    fontSize: '20px',
  },
}));


const TaskItem = ({ task, children }) => {
  const classes = useStyles();

  return (
    <div className={classes.taskItemContainer}>
      <div className={classes.taskItem}>
        <div className={classes.flexChild}>
          <TaskTextField taskId={task._id} taskText={task.title} />
          <Tags task={task} />
        </div>
        <div className={classes.actions}>
          {children}
        </div>
      </div>
    </div>
  );
};

export default TaskItem;
