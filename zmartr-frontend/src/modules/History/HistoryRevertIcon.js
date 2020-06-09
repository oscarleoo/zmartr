import React from 'react';
import RevertIcon from '@material-ui/icons/HistoryOutlined';
import { connect } from 'react-redux';
import { Tooltip, makeStyles } from '@material-ui/core';
import { revertAction } from '../../redux/actions/history';
import { useAuth0 } from '../../auth0/react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  icon: {
    fontSize: '18px',
    color: '#3f3f44',
  },
}));


const HistoryRevertIcon = ({ taskId, Icon, revertAction }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();
  const [showRevert, setShowRevert] = React.useState(false);
  const displayRevert = () => { setShowRevert(true); };
  const hideRevert = () => { setShowRevert(false); };
  const renderIcon = () => {
    if (showRevert) {
      return (
        <Tooltip title="Revert Action" placement="top">
          <RevertIcon className={classes.icon} style={{ cursor: 'pointer' }} onClick={revertAction(taskId, getTokenSilently)}/>
        </Tooltip>
      );
    }
    return <Icon className={classes.icon} />;
  };

  return (
    <div onMouseEnter={displayRevert} onMouseLeave={hideRevert}>
      {renderIcon()}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  revertAction: (taskId, getToken) => async () => {
    const token = await getToken();
    dispatch(revertAction(taskId, token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(HistoryRevertIcon);
