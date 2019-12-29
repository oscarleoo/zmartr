import React from 'react'
import { connect} from 'react-redux'
import { makeStyles } from '@material-ui/styles'
import Button from '@material-ui/core/Button';
import TopBar from '../TopBar'
import { logout } from '../../redux/actions/authentication'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    width: '100%',
    background: theme.palette.background.default
  },
  view: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
  },
  items: {
    display: 'flex',
  }
}));


const Page = ({ children, logout }) => {
  
  const classes = useStyles();

  const createNavigationItems = () => {
    return (
      <p></p>
    )
  }
  
  const createActionItems = () => {
    return (
      <div className={classes.items}>
        <Button color='secondary' onClick={logout}>
          Logout
        </Button>
      </div>
    )
  }

  return (
    <div className={classes.root}>
      <TopBar navigationItems={createNavigationItems()} actionItems={createActionItems()}/>
      <div className={classes.view}> 
        {children}
      </div>
    </div>
  );
};

const mapDispatchToProps = dispatch => {
  return {
    logout: () => dispatch(logout())
  }
}

export default connect(
  null,
  mapDispatchToProps
)(Page)
