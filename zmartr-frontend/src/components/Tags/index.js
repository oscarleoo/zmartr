import React from 'react';
import { connect } from 'react-redux';
import {
  makeStyles, Typography, IconButton, Tooltip,
} from '@material-ui/core';
import TagIcon from '@material-ui/icons/LocalOfferTwoTone';
import { openTagEditor } from '../../redux/actions/tags';

const useStyles = makeStyles((theme) => ({
  tags: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '3px',
  },
  currentTags: {
    display: 'flex',
    alignItems: 'center',
  },
  tag: {
    color: theme.palette.text.light,
    background: theme.palette.background.gray,
    height: '14px',
    padding: '0 10px',
    marginRight: '8px',
    borderRadius: '8px',
    opacity: '0.5',
    display: 'flex',
    alignItems: 'center',
  },
  tagIcon: {
    fontSize: '16px',
  },
  removeIcon: {
    fontSize: 0,
    cursor: 'pointer',
    marginLeft: '5px',
  },
  tagActions: {
    display: 'flex',
    alignItems: 'center',
    '&:hover': {
      '& $availableTag': {
        display: 'flex',
      },
    },
  },
}));


const Tags = ({ task, openEditor }) => {
  const classes = useStyles();

  return (
    <div className={classes.tags}>
      <div className={classes.currentTags}>
        {task.tags.map((tag) => (
          <div className={classes.tag} key={tag._id}>
            <Typography variant="caption">{tag.tag}</Typography>
          </div>
        ))}
      </div>
      <div className={classes.tagActions}>
        <Tooltip title="edit tags" placement="right">
          <IconButton className={classes.iconContainer} size="small" onClick={openEditor(task)}>
            <TagIcon className={classes.tagIcon} />
          </IconButton>
        </Tooltip>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => ({
  availableTags: state.tasks.availableTags,
});

const mapDispatchToProps = (dispatch) => ({
  openEditor: (task) => () => {
    dispatch(openTagEditor(task));
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Tags);
