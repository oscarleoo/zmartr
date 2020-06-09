import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Typography, Tooltip, Collapse } from '@material-ui/core';
import TagIcon from '@material-ui/icons/LocalOfferTwoTone';
import InfoIcon from '@material-ui/icons/InfoTwoTone';
import { addTagToTask, removeTagFromTask } from '../../redux/actions/tags';
import DisplayTag from './DisplayTag';
import AddNewTag from './AddNewTag';

const useStyles = makeStyles((theme) => ({
  tags: {
    marginTop: '3px',
  },
  currentTags: {
    display: 'flex',
    alignItems: 'center',
  },
  availableTags: {
    display: 'flex',
    alignItems: 'center',
    flexWrap: 'wrap',
    padding: '15px 0',
  },
  tag: {
    color: theme.palette.text.light,
    background: theme.palette.background.gray,
    height: '13px',
    padding: '2px 10px',
    marginRight: '8px',
    borderRadius: '8px',
    display: 'flex',
    alignItems: 'center',
    whiteSpace: 'nowrap',
  },
  tagIcon: {
    fontSize: '16px',
    color: '#707070',
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
  instructions: {
    display: 'flex',
    flexDirection: 'column',
    marginTop: '10px',
  },
  instruction: {
    height: '27px',
  },
  key: {
    border: '1px solid #ccc',
    borderRadius: '4px',
    padding: '0.1em 0.5em',
    margin: '0 0.2em',
    boxShadow: '0 1px 0px rgba(0, 0, 0, 0.2), 0 0 0 2px #fff',
  },
}));


const Tags = ({ task, availableTags }) => {
  const classes = useStyles();
  const [editOpen, setEditOpen] = React.useState(false);
  const [showInstructions, setShowInstructions] = React.useState(false);
  const tagEnter = () => { setEditOpen(true); };
  const tagLeave = () => { setEditOpen(false); };
  const instructionsEnter = () => { setShowInstructions(true); };
  const instructionsLeave = () => { setShowInstructions(false); };
  const selectedTags = availableTags.filter((tag) => task.tags.indexOf(tag._id) >= 0);
  const unusedTags = availableTags.filter((tag) => task.tags.indexOf(tag._id) < 0);

  return (
    <div className={classes.tags} onMouseLeave={tagLeave}>
      <div className={classes.currentTags}>
        {selectedTags.map((tag) => (
          <DisplayTag tag={tag} taskId={task._id} currentTags={task.tags} key={tag._id} tagFunction={removeTagFromTask} />
        ))}

        <Tooltip title="Tags" placement="right">
          <TagIcon className={classes.tagIcon} onMouseEnter={tagEnter} />
        </Tooltip>
      </div>

      <Collapse in={editOpen} timeout="auto" unmountOnExit>
        <div className={classes.availableTags}>
          {unusedTags.map((tag) => (
            <DisplayTag tag={tag} taskId={task._id} currentTags={task.tags} key={tag._id} tagFunction={addTagToTask} />
          ))}
          <AddNewTag />
          <InfoIcon
            onMouseEnter={instructionsEnter}
            onMouseLeave={instructionsLeave}
            className={classes.tagIcon}
          />
        </div>
        <Collapse in={showInstructions} timeout="auto" unmountOnExit>
          <div className={classes.instructions}>
            <Typography variant="caption" className={classes.instruction}>
              Use <kbd className={classes.key}>⌘</kbd> / <kbd className={classes.key}>Ctrl</kbd> + <kbd className={classes.key}>Click</kbd> to edit text.
            </Typography>
            <Typography variant="caption" className={classes.instruction}>
              Use <kbd className={classes.key}>Alt</kbd> + <kbd className={classes.key}>Click</kbd> to edit color.
            </Typography>
            <Typography variant="caption" className={classes.instruction}>
              Use <kbd className={classes.key}>Shift</kbd> + <kbd className={classes.key}>Click</kbd> to hide tag.
            </Typography>
          </div>
        </Collapse>
      </Collapse>
    </div>
  );
};

const mapStateToProps = (state) => ({
  availableTags: state.tags.availableTags,
});

export default connect(
  mapStateToProps,
  null,
)(Tags);
