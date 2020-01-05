import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core';
import Application from './Application';
import About from './About';
import Message from '../../components/Message';

const useStyles = () => makeStyles({
  application: {
    height: '100vh',
    width: '100%',
  },
});

const Zmartr = ({ token }) => {
  const classes = useStyles();

  const renderApplication = () => {
    if (token) {
      return <Application />;
    }
    return <About />;
  };

  return (
    <div className={classes.application}>
      {renderApplication()}
      <Message />
    </div>
  );
};

const mapStateToProps = (state) => ({
  token: state.authentication.token,
});

export default connect(
  mapStateToProps,
  null,
)(Zmartr);
