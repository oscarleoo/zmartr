import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, IconButton } from '@material-ui/core';
import { useAuth0 } from '../../auth0/react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  iconContainer: {
    padding: '3px',
    color: 'inherit',
    '&:hover': {
      color: theme.palette.text.gray,
    },
  },
  icon: {
    fontSize: '20px',
  },
}));


const TaskAction = ({ taskId, action, Icon, performAction }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();

  return (
    <div>
      <IconButton
        className={classes.iconContainer}
        onClick={performAction(taskId, action, getTokenSilently)}
      >
        <Icon className={classes.icon} />
      </IconButton>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  performAction: (taskId, action, getToken) => async () => {
    const token = await getToken();
    dispatch(action(taskId, token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(TaskAction);
