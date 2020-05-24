import React from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core';
import CheckIcon from '@material-ui/icons/Check'
import { useAuth0 } from '../../../auth0/react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  tagContainer: {
    margin: '7px',
    padding: '7px 12px',
    borderRadius: '14px',
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
  checkIcon: {
    fontSize: '15px',
    color: theme.palette.text.light,
    marginLeft: '4px',
  },
}));

const DisplayTag = ({ tag, taskId, opacity, tagFunction, addOrRemoveTag, selected }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();

  return (
    <Button
      key={tag._id}
      disableRipple
      className={classes.tagContainer}
      style={{ background: tag.color }}
      onClick={addOrRemoveTag(taskId, tag._id, tagFunction, getTokenSilently)}
    >
      <Typography variant="caption" className={classes.tagText}>{tag.tag}</Typography>
      {selected && <CheckIcon className={classes.checkIcon} />}
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
