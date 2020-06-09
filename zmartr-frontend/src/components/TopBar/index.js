import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import { TextField, InputAdornment } from '@material-ui/core';
import { connect } from 'react-redux';
import SearchIcon from '@material-ui/icons/FilterList';
import { useAuth0 } from '../../auth0/react-auth0-spa';
import SideBarItem from './SideBarItem';
import { updateSearchString } from '../../redux/actions/tasks';
import logo from '../../static/images/zmartr-logo.png';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  topBar: {
    height: '44px',
    width: '100%',
    boxShadow: '0 0 0 0',
    background: theme.palette.background.gray,
  },
  toolBar: {
    flex: 1,
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 0,
    marginLeft: '5%',
    minHeight: 0,
  },
  searchField: {
    height: '26px',
    width: '300px',
    fontSize: '14px',
    background: 'gray',
    borderColor: '#fff',
    marginLeft: '20px',
    '&:hover': {
      background: '#e0e0e0 !important',
      transition: 'background 200ms linear',
      // borderColor: `${theme.palette.primary.main} !important`,
    },
  },
  leftContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  navigationItems: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    height: '22px',
  },
}));


const TopBar = ({ currentSearch, filterTasks }) => {
  const classes = useStyles();
  const { isAuthenticated, logout } = useAuth0();
  const handleSearchChange = (event) => { filterTasks(event.target.value); };

  return (
    <AppBar position="fixed" className={classes.topBar}>
      <Toolbar className={classes.toolBar}>
        <div className={classes.leftContainer}>
          <img className={classes.logo} src={logo} alt="logo" />
          <TextField
            id="standard-basic"
            variant="outlined"
            size="small"
            placeholder="Filter backlog..."
            defaultValue={currentSearch}
            onChange={handleSearchChange}
            autoComplete="off"
            InputLabelProps={{
              className: classes.searchField,
            }}
            InputProps={{
              className: classes.searchField,
              startAdornment: (
                <InputAdornment position="start">
                  <SearchIcon style={{ fontSize: '18px' }} />
                </InputAdornment>
              ),
            }}
          />
        </div>
        {isAuthenticated && (
          <div className={classes.navigationItems}>
            <SideBarItem title="Tasks" href="/" />
            <SideBarItem title="Stats" href="/stats" />
            <SideBarItem title="History" href="/history" />
            <SideBarItem title="Logout" href="/logout" onClickFunction={logout} />
          </div>
        )}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = (state) => ({
  currentSearch: state.tasks.searchString,
});

const mapDispatchToProps = (dispatch) => ({
  filterTasks: (searchString) => (dispatch(updateSearchString(searchString))),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TopBar);
