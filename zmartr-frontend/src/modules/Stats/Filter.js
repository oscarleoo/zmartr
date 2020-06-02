import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import FilterCheckBox from '../../components/Actions/FilterCheckBox';
import { addToStatus, removeFromStatus, addToTags, removeFromTags } from '../../redux/actions/stats';


const useStyles = makeStyles((theme) => ({
  filterContainer: {
    width: '200px',
    display: 'flex',
    flexDirection: 'column',
    background: '#fafafa',
    justifyContent: 'flex-start',
    padding: '20px 50px',
  },
  tagContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '14px',
  },
  heading: {
    marginTop: '30px',
    marginBottom: '24px',
  },
  checkBox: {
    padding: '0',
    marginRight: '14px',
  },
}));

const Filter = ({ availableTags, tagFilter, statusFilter }) => {
  const classes = useStyles();
  const statuses = ['Started', 'Stopped', 'Finished', 'Archived'];

  return (
    <div className={classes.filterContainer}>
      <Typography variant="h4" className={classes.heading}>Status</Typography>
      {statuses.map((status) => (
        <FilterCheckBox
          key={status}
          title={status}
          color="#3f3f44"
          isChecked={statusFilter.includes(status)}
          addAction={addToStatus}
          removeAction={removeFromStatus}
        />
      ))}
      <Typography variant="h4" className={classes.heading}>Tags</Typography>
      {availableTags.map((tag) => (
        <FilterCheckBox
          key={tag._id}
          title={tag.tag}
          color={tag.color}
          isChecked={tagFilter.includes(tag.tag)}
          addAction={addToTags}
          removeAction={removeFromTags}
        />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  availableTags: state.tags.availableTags,
  tagFilter: state.stats.tagFilter,
  statusFilter: state.stats.statusFilter,
});

export default connect(
  mapStateToProps,
  null,
)(Filter);
