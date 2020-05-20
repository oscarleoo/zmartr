import React, { useState } from 'react';
import { connect } from 'react-redux';
import Button from '@material-ui/core/Button';
import { makeStyles, TextField } from '@material-ui/core';
import { createTag } from '../../../redux/actions/tags';
import { useAuth0 } from '../../../auth0/react-auth0-spa';

const useStyles = makeStyles((theme) => ({
  createNewTagContainer: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: '20px',
  },
}));

const TagsEditor = ({ createNewTag }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();
  const [tagTitle, setTagTitle] = useState('');
  const [color, setColor] = useState('');
  const updateTag = (event) => { setTagTitle(event.target.value); };
  const updateColor = (event) => { setColor(event.target.value); };
  const createOrUpdateTag = () => {
    createNewTag(tagTitle, color, getTokenSilently);
  };

  return (
    <div className={classes.createNewTagContainer}>
      <TextField id="standard-basic" placeholder="Tag" autoComplete="off" onChange={updateTag} />
      <TextField id="standard-basic" placeholder="Color" autoComplete="off" onChange={updateColor} />
      <Button color="primary" variant="contained" onClick={createOrUpdateTag}>
        Create Tag
      </Button>
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createNewTag: async (tag, color, getToken) => {
    const token = await getToken();
    dispatch(createTag(tag, color, token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(TagsEditor);
