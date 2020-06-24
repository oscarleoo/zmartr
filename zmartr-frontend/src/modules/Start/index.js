import React from 'react';
import { makeStyles, MobileStepper, Typography, CardMedia, Button } from '@material-ui/core';
import EnterIcon from '@material-ui/icons/ExitToApp';
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft';
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight';
import { useAuth0 } from '../../auth0/react-auth0-spa';
import backlogVideo from '../../static/videos/backlog-video-1080.mov';
import historyVideo from '../../static/videos/history-video-1080.mov';
import metricVideo from '../../static/videos/metric-video-1080.mov';
import statsVideo from '../../static/videos/stats-video-1080.mov';


const useStyles = makeStyles((theme) => ({
  startContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    background: '#1fab89',
  },
  startHeading: {
    fontSize: '80px',
    lineHeight: '90px',
  },
  screenshots: {
    flex: 1,
    padding: '3%',
  },
  screenshot: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  image: {
    height: '500px',
    // border: '4px solid #3f3f44',
  },
  stepper: {
    marginTop: '10px',
    background: 'none',
  },
  arrow: {
    cursor: 'pointer',
    padding: '10px',
    color: '#505050',
    '&:hover': {
      color: theme.palette.text.primary,
    },
  },
  imageDescription: {
    color: theme.palette.text.primary,
    marginBottom: '40px',
    width: '80%',
    maxWidth: '900px',
  },
}));

const chartImages = [
  { title: 'Create and tag your tasks, just like in any other task management application. Select the task you want to work on right now and make some progress! :D', video: backlogVideo },
  { title: 'Select your most relevant metrics to create a backlog view that is prefect for you and that helps you stay on track with your goals.', video: metricVideo },
  { title: 'Create your own dashboard to get an overview of your progress. Filter the dashboards on tags or status for additional details.', video: statsVideo },
  { title: 'Go back in time and look at your action history to see exactly what you did in the past. You can edit or remove certain activities if necessary', video: historyVideo },
];

const Start = () => {
  const classes = useStyles();
  const { loginWithRedirect } = useAuth0();
  const [activeStep, setActiveStep] = React.useState(0);
  const maxSteps = 4;

  const handleNext = () => {
    if (activeStep < maxSteps - 1) {
      setActiveStep(activeStep + 1);
    }
  };

  const handleBack = () => {
    if (activeStep > 0) {
      setActiveStep(activeStep - 1);
    }
  };

  return (
    <div className={classes.startContainer}>
      <Typography align="center" variant="h4" className={classes.imageDescription}>{chartImages[activeStep].title}</Typography>
      <video className={classes.image} autoPlay loop src={chartImages[activeStep].video} />
      {/* <img className={classes.image} src={chartImages[activeStep].image} /> */}
      <MobileStepper
        className={classes.stepper}
        steps={maxSteps}
        position="static"
        variant="dots"
        activeStep={activeStep}
        nextButton={
          <KeyboardArrowRight onClick={handleNext} className={classes.arrow} />
        }
        backButton={
          <KeyboardArrowLeft onClick={handleBack} className={classes.arrow} />
        }
      />
      <Button
        variant="contained"
        color="primary"
        size="large"
        onClick={loginWithRedirect}
        style={{ marginTop: '30px', padding: '14px 30px' }}
        startIcon={<EnterIcon />}
      >
        Enter
      </Button>
    </div>
  );
};

export default Start;
