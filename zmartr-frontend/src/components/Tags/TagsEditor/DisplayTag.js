import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import { useAuth0 } from '../../../auth0/react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  tagContainer: {
    margin: '5px',
    padding: '5px 10px',
    borderRadius: '10px',
    cursor: 'pointer',
    textTransform: 'none',
  },
  tagText: {
    fontSize: '14px',
    color: theme.palette.text.light,
  },
  createNewTagContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
}));

const DisplayTag = ({ tag, taskId, opacity, tagFunction, addOrRemoveTag }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();

  return (
    <Button
      key={tag._id}
      disableFocusRipple
      disableRipple
      className={classes.tagContainer}
      style={{ background: tag.color, opacity }}
      onClick={addOrRemoveTag(taskId, tag._id, tagFunction, getTokenSilently)}
    >
      <Typography variant="caption" className={classes.tagText}>{tag.tag}</Typography>
    </Button>
  );
};

const mapDispatchToProps = (dispatch) => ({
  addOrRemoveTag: (taskId, tagId, tagFunction, getToken) => async () => {
    const token = await getToken();
    dispatch(tagFunction(taskId, tagId, token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(DisplayTag);
