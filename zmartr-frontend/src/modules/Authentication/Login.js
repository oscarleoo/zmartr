import React from 'react';
import { connect } from 'react-redux'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import Link from '@material-ui/core/Link';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import { login } from '../../redux/actions/authentication'
import InformationPage from '../../components/Pages/InformationPage';


const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  }
}));

const Login = ({ history, loginUser }) => {

  const classes = useStyles();
  const state = {
    email: '',
    password: ''
  }

  const authenticate = () => {
    loginUser( state.email, state.password )
  }

  const handleEmailChange = (event) => {
    state.email = event.target.value
  }
  
  const handlePasswordChange = (event) => {
    state.password = event.target.value
  }

  return (
    <InformationPage>
      <Container className={classes.formContainer}>
        <CssBaseline />
        <div className={classes.paper}>
            <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
            Sign in
            </Typography>
            <div className={classes.form}>
            <TextField
                variant="filled" margin="normal" required fullWidth id="email" label="Email Address" 
                name="email" autoComplete="email" autoFocus onChange={ handleEmailChange } />
            <TextField
                variant="filled" margin="normal" required fullWidth name="password" label="Password"
                type="password" id="password" autoComplete="current-password" onChange={ handlePasswordChange } />
            <Button 
                fullWidth variant="contained" color="primary"
                className={classes.submit} onClick={ authenticate }
            > Sign In </Button>
            <Grid container>
                <Grid item xs>
                <Link href="#" variant="body2">
                    Forgot password?
                </Link>
                </Grid>
                <Grid item>
                <Link variant="body2" onClick={ () => history.push('/register') }>
                    {"Don't have an account? Sign Up"}
                </Link>
                </Grid>
            </Grid>
            </div>
        </div>
      </Container>
    </InformationPage>
  );
}

const mapDispatchToProps = dispatch => {
    return {
        loginUser: (email, password) => dispatch(login(email, password)),
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Login)