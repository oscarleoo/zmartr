import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ExpandLess from '@material-ui/icons/ExpandLess';
import ExpandMore from '@material-ui/icons/ExpandMore';
import { Typography, Button, Collapse } from '@material-ui/core';
import FilterCheckBox from '../../components/Actions/FilterCheckBox';
import {
  addToStatus, removeFromStatus, addToTags, removeFromTags,
} from '../../redux/actions/stats';


const useStyles = makeStyles((theme) => ({
  filterContainer: {
    width: '190px',
    display: 'flex',
    flexDirection: 'column',
    background: '#fafafa',
    justifyContent: 'flex-start',
    padding: '20px 35px',
  },
  tagContainer: {
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
    marginBottom: '14px',
  },
  button: {
    justifyContent: 'space-between',
    textTransform: 'none',
    padding: 0,
    width: '100%',
  },
  heading: {
    marginTop: '20px',
    marginBottom: '20px',
    fontSize: '18px',
  },
  checkBox: {
    padding: '0',
    marginRight: '14px',
  },
}));

const Filter = ({ availableTags, tagFilter, statusFilter }) => {
  const classes = useStyles();
  const statuses = ['Started', 'Stopped', 'Finished', 'Archived'];

  const [statusOpen, setStatusOpen] = React.useState(true);
  const handleStatusClick = () => { setStatusOpen(!statusOpen); };

  const [tagsOpen, setTagsOpen] = React.useState(true);
  const handleTagsClick = () => { setTagsOpen(!tagsOpen); };

  return (
    <div className={classes.filterContainer}>
      {/* <Typography variant="h4" className={classes.heading}>Settings</Typography>
      <Typography variant="h4" className={classes.heading}>Metrics</Typography> */}
      <Button
        onClick={handleStatusClick}
        disableRipple
        style={{ backgroundColor: 'transparent' }}
        className={classes.button}
      >
        <Typography variant="h4" className={classes.heading}>Status</Typography>
        {statusOpen ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
      </Button>
      <Collapse in={statusOpen} timeout="auto" unmountOnExit>
        {statuses.map((status) => (
          <FilterCheckBox
            key={status}
            title={status}
            color="#3f3f44"
            isChecked={statusFilter.includes(status)}
            addAction={addToStatus(status)}
            removeAction={removeFromStatus(status)}
          />
        ))}
      </Collapse>
      <Button
        onClick={handleTagsClick}
        disableRipple
        style={{ backgroundColor: 'transparent' }}
        className={classes.button}
      >
        <Typography variant="h4" className={classes.heading}>Tags</Typography>
        {tagsOpen ? <ExpandLess className={classes.icon} /> : <ExpandMore className={classes.icon} />}
      </Button>
      <Collapse in={tagsOpen} timeout="auto" unmountOnExit>
        {availableTags.map((tag) => (
          <FilterCheckBox
            key={tag._id}
            title={tag.tag}
            color={tag.color}
            isChecked={tagFilter.includes(tag._id)}
            addAction={addToTags(tag._id)}
            removeAction={removeFromTags(tag._id)}
          />
        ))}
      </Collapse>
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
