import React from 'react';
import { connect } from 'react-redux';
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
import { register } from '../../redux/actions/authentication';

const useStyles = makeStyles((theme) => ({
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
    width: '100%',
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
  formContainer: {
    flex: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  link: {
    color: theme.palette.secondary.main,
    cursor: 'pointer',
  },
}));


const Register = ({ history, register }) => {
  const classes = useStyles();

  const state = {
    email: '',
    password: '',
  };

  const handleEmailChange = (event) => {
    state.email = event.target.value;
  };

  const handlePasswordChange = (event) => {
    state.password = event.target.value;
  };

  const registerUser = () => {
    register(state.email, state.password);
  };

  return (
    <Container className={classes.formContainer}>
      <CssBaseline />
      <div className={classes.paper}>
        <Avatar className={classes.avatar}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Register!
        </Typography>
        <form className={classes.form}>
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={handleEmailChange}
          />
          <TextField
            variant="filled"
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="current-password"
            onChange={handlePasswordChange}
          />
          <Button
            fullWidth
            variant="contained"
            color="primary"
            size="large"
            className={classes.submit}
            onClick={registerUser}
          >
            Register
          </Button>
          <Grid container justify="flex-end">
            <Grid item>
              <Link variant="body2" onClick={() => history.push('/login')} className={classes.link}>
                Already have an account? Sign in
              </Link>
            </Grid>
          </Grid>
        </form>
      </div>
    </Container>
  );
};

const mapDispatchToProps = (dispatch) => ({
  register: (email, password) => {
    dispatch(register(email, password));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Register);
