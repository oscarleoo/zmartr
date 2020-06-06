import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import ListItem from '@material-ui/core/ListItem';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  buttonLeaf: {
    padding: '8px 0px',
    width: '80px',
    marginTop: '3px',
    justifyContent: 'center',
    textTransform: 'none',
    letterSpacing: 0,
    fontWeight: theme.typography.fontWeightRegular,
    color: '#e0e0e0',
    borderRadius: 0,
    borderBottom: '3px solid #3f3f44',
  },
  icon: {
    color: theme.palette.icon,
    display: 'flex',
    alignItems: 'center',
    marginRight: '10px',
  },
  label: {
    display: 'flex',
    alignItems: 'center',
    marginLeft: 'auto',
  },
  active: {
    color: '#fafafa',
    borderBottom: '3px solid #fafafa',
    '& $icon': {
      color: '#fafafa',
    },
  },
  text: {
    color: '#fafafa',
    fontSize: '14px',
  },
}));


const SideBarItem = ({ title, href, icon: Icon, onClickFunction }) => {
  const classes = useStyles();

  return (
    <ListItem
      button
      key={title}
      disableRipple
      activeClassName={classes.active}
      className={classes.buttonLeaf}
      component={RouterLink}
      exact
      to={href}
      onClick={onClickFunction}
    >
      {Icon && <Icon className={classes.icon} />}
      <Typography className={classes.text}>{title}</Typography>
    </ListItem>
  );
};

export default SideBarItem;
