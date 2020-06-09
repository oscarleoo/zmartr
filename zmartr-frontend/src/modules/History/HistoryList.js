import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import { connect } from 'react-redux';
import HistoryItem from './HistoryItem';


const useStyles = makeStyles((theme) => ({
  container: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    background: theme.palette.background.white,
  },
}));

const HistoryList = ({ history, searchString, availableTags }) => {
  const classes = useStyles();
  const filteredHistory = history.filter((item) => {
    const titleIncludes = item.title.toLowerCase().includes(searchString);
    const filteredTags = availableTags.filter((tag) => (tag.tag.includes(searchString)));
    const tagIds = filteredTags.map((tag) => (tag._id));
    const hasTag = item.tags.filter((tag) => (tagIds.indexOf(tag) >= 0)).length > 0;
    return (titleIncludes || hasTag);
  });

  return (
    <div className={classes.container}>
      {filteredHistory.map((item) => (
        <HistoryItem key={item.date} item={item} />
      ))}
    </div>
  );
};

const mapStateToProps = (state) => ({
  history: state.history.list,
  searchString: state.tasks.searchString,
  availableTags: state.tags.availableTags,
});

export default connect(
  mapStateToProps,
  null,
)(HistoryList);
