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
import { register } from '../../redux/actions/authentication'

const useStyles = makeStyles(theme => ({
  '@global': {
    body: {
      backgroundColor: theme.palette.common.white,
    },
  },
  paper: {
    marginTop: theme.spacing(8),
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
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
    background: '#00adb5'
  },
}));


const Register = ({ history, register }) => {

  const classes = useStyles();

  const state = {
    firstName: '',
    lastName: '',
    email: '',
    password: ''
  }

  const handleFirstNameChange = (event) => {
    state.firstName = event.target.value
  }

  const handleLastNameChange = (event) => {
    state.lastName = event.target.value
  }

  const handleEmailChange = (event) => {
    state.email = event.target.value
  }

  const handlePasswordChange = (event) => {
    state.password = event.target.value
  }

  const registerUser = () => {
      register(state.firstName, state.lastName, state.email, state.password)
  }

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register
        </Typography>
        <div className={classes.form}>
          <Grid container spacing={2}>
          <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="firstName"
                label="First Name"
                name="firstName"
                autoComplete="firstName"
                onChange={ handleFirstNameChange }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
                autoComplete="lastName"
                onChange={ handleLastNameChange }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                onChange={ handleEmailChange }
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={ handlePasswordChange }
              />
            </Grid>

          </Grid>
          <Button
            fullWidth variant="contained" color="primary" 
            className={classes.submit} onClick={registerUser}
          > Sign Up </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" onClick={ () => history.push('/login') }>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </div>
      </div>
    </Container>
  );
}

const mapDispatchToProps = dispatch => {
    return {
        register: (firstName, lastName, email, password) => {
            dispatch(register(firstName, lastName, email, password))
        }
    }
}

export default connect(
    null,
    mapDispatchToProps
)(Register)