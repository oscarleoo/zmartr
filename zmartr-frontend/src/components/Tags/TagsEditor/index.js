import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { makeStyles, TextField } from '@material-ui/core';
import {
  removeTagFromTask, addTagToTask, closeTagEditor, createTag,
} from '../../../redux/actions/tags';
import { useAuth0 } from '../../../auth0/react-auth0-spa';
import DisplayTag from './DisplayTag';

const useStyles = makeStyles((theme) => ({
  title: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: '10px 15px',
  },
  content: {
    display: 'flex',
    flexWrap: 'wrap',
    padding: '20px 10px',
    width: '550px',
  },
  createNewTagContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
}));

const isValid = (tag, color) => {
  if (tag === '') {
    return false;
  }
  if (color.length !== 7) {
    return false;
  }
  if (color[0] !== '#') {
    return false;
  }
  for (let i = 1; i < 7; i += 1) {
    if ('0123456789abcdef'.indexOf(color[i].toLowerCase()) < 0) {
      return false;
    }
  }

  return true;
};

const renderText = (tag, availableTags) => {
  if (availableTags.filter((t) => t.tag === tag).length > 0) {
    return 'Update Tag';
  }

  return 'Create Tag';
};

const TagsEditor = ({ open, task, availableTags, closeEditor, createNewTag }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();
  const currentTagsIds = task.tags.map((tag) => tag._id);
  const [tagTitle, setTagTitle] = useState('');
  const [color, setColor] = useState('');
  const updateTag = (event) => { setTagTitle(event.target.value); };
  const updateColor = (event) => { setColor(event.target.value); };
  const createOrUpdateTag = () => {
    createNewTag(tagTitle, color, getTokenSilently);
  };

  return (
    <Dialog onClose={closeEditor} aria-labelledby="customized-dialog-title" open={open} className={classes.dialog}>
      <MuiDialogTitle disableTypography className={classes.title}>
        <Typography variant="h5">{task.title}</Typography>
        <IconButton aria-label="close" className={classes.closeButton} onClick={closeEditor}>
          <CloseIcon />
        </IconButton>
      </MuiDialogTitle>
      <MuiDialogContent dividers className={classes.content}>
        {availableTags.map((tag) => {
          if (currentTagsIds.includes(tag._id)) {
            return <DisplayTag tag={tag} taskId={task._id} key={tag._id} tagFunction={removeTagFromTask} selected />;
          }
          return <DisplayTag tag={tag} taskId={task._id} key={tag._id} tagFunction={addTagToTask} opacity="0.4" />;
        })}
      </MuiDialogContent>
      <MuiDialogActions className={classes.createNewTagContainer}>
        <TextField id="standard-basic" placeholder="Tag" autoComplete="off" onChange={updateTag} />
        <TextField id="standard-basic" placeholder="Color (hex)" autoComplete="off" onChange={updateColor} />
        <Button color="primary" variant="contained" onClick={createOrUpdateTag} disabled={!isValid(tagTitle, color)}>
          {renderText(tagTitle, availableTags)}
        </Button>
      </MuiDialogActions>
    </Dialog>
  );
};

const mapStateToProps = (state) => ({
  availableTags: state.tags.availableTags,
  open: state.tags.editorOpen,
  task: state.tags.taskToEdit,
});

const mapDispatchToProps = (dispatch) => ({
  createNewTag: async (tag, color, getToken) => {
    const token = await getToken();
    dispatch(createTag(tag, color, token));
  },
  closeEditor: () => dispatch(closeTagEditor()),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(TagsEditor);
