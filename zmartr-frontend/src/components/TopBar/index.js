import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import logo from '../../static/images/logo-dark.png';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  topBar: {
    flex: '0 0 80px',
    width: '100%',
    boxShadow: '0 0 0 0',
    background: theme.palette.background.gray,
  },
  toolBar: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: '2%',
    marginRight: '2%',
  },
  actionItems: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: '40px',
    marginRight: '20px',
  },
}));


const TopBar = ({ navigationItems, actionItems }) => {
  const classes = useStyles();

  return (
    <AppBar position="static" className={classes.topBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.navigationItems}>
          <div href="/"><a href="/"><img className={classes.logo} src={logo} /></a></div>
          <div>{navigationItems}</div>
        </div>
        <div className={classes.actionItems}>{actionItems}</div>
      </Toolbar>
    </AppBar>
  );
};

export default TopBar;
