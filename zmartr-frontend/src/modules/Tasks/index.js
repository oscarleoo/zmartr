import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import SideBar from './SideBar';
import SelectedTask from './SelectedTask';
import Backlog from './Backlog';
import TagsEditor from '../../components/Tags/TagsEditor';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    background: theme.palette.background.white,
  },
  tasksContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.white,
    justifyContent: 'flex-start',
    margin: '50px 200px 50px 5%',
    paddingRight: '5%',
  },
}));


const Tasks = () => {
  const classes = useStyles();

  return (
    <div className={classes.container}>
      <div className={classes.tasksContainer}>
        <SelectedTask />
        <Backlog />
        <TagsEditor />
      </div>
      <SideBar />
    </div>
  );
};


export default Tasks;
