import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import List from './List';
import SideBar from './SideBar';
import { getTasks } from '../../redux/actions/tasks';
import { useAuth0 } from '../../auth0/react-auth0-spa';


const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flex: 1,
    background: theme.palette.background.white,
  },
}));

const Tasks = ({ loadTasks }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();

  const renderView = () => {
    loadTasks(getTokenSilently);
    return (
      <div className={classes.container}>
        <List />
        <SideBar />
      </div>
    );
  };

  return (
    <div className={classes.container}>
      {renderView()}
    </div>
  );
};

// Tasks.propTypes = {
//   loadTasks: PropTypes.func.isRequired,
// };

const mapDispatchToProps = (dispatch) => ({
  loadTasks: async (getToken) => {
    const token = await getToken();
    dispatch(getTasks(token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Tasks);
