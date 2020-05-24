import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { getAllTasks } from '../../redux/actions/tasks';
import Filter from './Filter';
import PieChart from './Charts/PieChart';
import Metrics from './Charts/Metrics';
import TimeLine from './Charts/TimeLine';
import { useAuth0 } from '../../auth0/react-auth0-spa';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    background: theme.palette.background.white,
  },
  chartContainer: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
  },
  topCharts: {
    flex: 1,
    display: 'flex',
  },
  bottomCharts: {
    flex: 1,
    display: 'flex',
  },
}));

const Stats = ({ loadTasks }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();

  const renderView = () => {
    loadTasks(getTokenSilently);
    return (
      <div className={classes.container}>
        <Filter />
        <div className={classes.chartContainer}>
          <div className={classes.topCharts}>
            <PieChart />
            <Metrics />
          </div>
          <div className={classes.bottomCharts}>
            <TimeLine />
          </div>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.container}>
      {renderView()}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  loadTasks: async (getToken) => {
    const token = await getToken();
    dispatch(getAllTasks(token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(Stats);
