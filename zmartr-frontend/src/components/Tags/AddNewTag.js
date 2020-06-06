import React from 'react';
import { connect } from 'react-redux';
import { makeStyles, Button, TextField, Tooltip } from '@material-ui/core';
import AddIcon from '@material-ui/icons/Add';
import { useAuth0 } from '../../auth0/react-auth0-spa';
import { createTag } from '../../redux/actions/tags';

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
  addIcon: {
    color: '#ffffff',
    fontSize: '13px',
  },
}));

const AddNewTag = ({ createTag }) => {
  const classes = useStyles();
  const { getTokenSilently } = useAuth0();
  const [text, setText] = React.useState('');
  const [editText, setEditText] = React.useState(false);

  const textChange = (event) => {
    setText(event.target.value);
  };
  const textClose = (event) => {
    if (event.keyCode === 13) {
      createTag(text, getTokenSilently);
      setEditText(false);
    }
  };

  const handleClick = () => { setEditText(true); };

  return (
    <div>
      { editText ? (
        <TextField
          style={{ background: '#a0a0a0', minWidth: '20px', width: text.length * 7 }}
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
          defaultValue={text}
          onChange={textChange}
          onKeyDown={textClose}
          autoFocus
        />
      ) : (
        <Button
          key="addTag"
          disableRipple
          className={classes.tagContainer}
          onClick={handleClick}
          style={{ background: '#a0a0a0' }}
        >
          <AddIcon className={classes.addIcon} />
        </Button>
      )}
    </div>
  );
};

const mapDispatchToProps = (dispatch) => ({
  createTag: async (text, getToken) => {
    const token = await getToken();
    dispatch(createTag(text, token));
  },
});

export default connect(
  null,
  mapDispatchToProps,
)(AddNewTag);
