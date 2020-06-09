import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import { useAuth0 } from '../../auth0/react-auth0-spa';
import { getHistory } from '../../redux/actions/history';
import HistoryList from './HistoryList';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    background: theme.palette.background.white,
    padding: '100px 15%',
  },
}));

const History = ({ getHistory }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();

  const renderHistory = () => {
    getHistory(getTokenSilently);
    return <HistoryList />;
  };

  return (
    <div className={classes.container}>
      {renderHistory()}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  getHistory: async (getToken) => {
    const token = await getToken();
    dispatch(getHistory(token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(History);
