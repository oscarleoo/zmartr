import React from 'react';
import { connect } from 'react-redux';
import { SketchPicker } from 'react-color';
import Typography from '@material-ui/core/Typography';
import { makeStyles, Button, TextField } from '@material-ui/core';
import { useAuth0 } from '../../auth0/react-auth0-spa';
import { hideTag, updateTag, sendTagUpdate } from '../../redux/actions/tags';

const useStyles = makeStyles((theme) => ({
  tagContainer: {
    padding: '2px 10px',
    borderRadius: '8px',
    textTransform: 'none',
    margin: '4px 8px 4px 0',
    opacity: '0.9',
    '&:hover': {
      opacity: '1.0',
    },
    minWidth: '0px',
  },
  editField: {
    padding: '2px 10px',
    margin: '4px 8px 4px 0',
    borderRadius: '8px',
    height: '13px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minWidth: '0px',
  },
  tagText: {
    color: theme.palette.text.light,
  },
  popover: {
    position: 'absolute',
    zIndex: '2',
  },
  cover: {
    position: 'fixed',
    top: '0px',
    right: '0px',
    bottom: '0px',
    left: '0px',
  },
}));

const DisplayTag = ({
  tag, taskId, tagFunction, addOrRemoveTag, hideTag, updateTag, sendTagUpdate
}) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();
  const [showColorPicker, setShowColorPicker] = React.useState(false);
  const [editText, setEditText] = React.useState(false);

  const colorChange = (color) => { updateTag(tag, tag.tag, color.hex); };
  const colorClose = () => {
    sendTagUpdate(tag._id, tag.tag, tag.color, getTokenSilently);
    setShowColorPicker(false);
  };
  const textChange = (event) => {
    updateTag(tag, event.target.value, tag.color);
  };
  const textClose = (event) => {
    if (event.keyCode === 13) {
      sendTagUpdate(tag._id, tag.tag, tag.color, getTokenSilently);
      setEditText(false);
    }
  };

  const handleClick = (event) => {
    event.persist();
    if (event.ctrlKey || event.metaKey) {
      setEditText(true);
    } else if (event.altKey) {
      setShowColorPicker(true);
    } else if (event.shiftKey) {
      hideTag(tag._id, getTokenSilently);
    } else {
      addOrRemoveTag(taskId, tag._id, tagFunction, getTokenSilently);
    }
  };


  return (
    <div>
      { editText ? (
        <TextField
          style={{ background: tag.color, width: tag.tag.length * 7 }}
          InputProps={{
            disableUnderline: true,
            style: {
              fontSize: '11px',
              padding: '0px !important',
              color: '#ffffff',
              fontWeight: '400',
              lineHeight: '13px',
              letterSpacing: '0.33px',
            },
          }}
          inputProps={{
            style: {
              padding: '0px',
              textAlign: 'center',
            },
          }}
          className={classes.editField}
          defaultValue={tag.tag}
          onChange={textChange}
          onKeyDown={textClose}
          autoFocus
        />
      ) : (
        <Button
          key={tag._id}
          disableRipple
          className={classes.tagContainer}
          onClick={handleClick}
          style={{ background: tag.color }}
        >
          <Typography variant="caption" className={classes.tagText}>{tag.tag}</Typography>
        </Button>
      )}
      { showColorPicker ? (
        <div className={classes.popover}>
          <div className={classes.cover} onClick={colorClose} />
          <SketchPicker color={tag.color} onChange={colorChange} />
        </div>
      ) : null }
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addOrRemoveTag: async (taskId, tagId, tagFunction, getToken) => {
    const token = await getToken();
    dispatch(tagFunction(taskId, tagId, token));
  },
  updateTag: (tag, text, color) => {
    dispatch(updateTag(tag, text, color));
  },
  sendTagUpdate: async (tagId, text, color, getToken) => {
    const token = await getToken();
    dispatch(sendTagUpdate(tagId, text, color, token));
  },
  hideTag: async (tagId, getToken) => {
    const token = await getToken();
    dispatch(hideTag(tagId, token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(DisplayTag);
