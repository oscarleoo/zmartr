import React from 'react';
import { NavLink as RouterLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItem from '@material-ui/core/ListItem';

const useStyles = makeStyles((theme) => ({
  listItem: {
  },
  buttonLeaf: {
    padding: '10px 0px',
    width: '100px',
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
    color: '#ffffff',
    borderBottom: '3px solid #ffffff',
    '& $icon': {
      color: '#ffffff',
    },
  },
}));


const SideBarItem = ({ title, href, icon: Icon, onClickFunction }) => {
  const classes = useStyles();

  return (
    <ListItem button className={classes.listItem} disableGutters key={title}>
      <Button
        activeClassName={classes.active}
        className={classes.buttonLeaf}
        component={RouterLink}
        exact
        to={href}
        onClick={onClickFunction}
      >
        {Icon && <Icon className={classes.icon} />}
        {title}
      </Button>
    </ListItem>
  );
};

export default SideBarItem;
