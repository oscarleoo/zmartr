import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import CreatedIcon from '@material-ui/icons/AddCircleOutline';
import FinishedIcon from '@material-ui/icons/CheckCircleOutline';
import ArchivedIcon from '@material-ui/icons/NotInterestedOutlined';
import RevertIcon from '@material-ui/icons/HistoryOutlined';
import EditIcon from '@material-ui/icons/Edit';


const useStyles = makeStyles((theme) => ({
  itemContainer: {
    padding: '16px 0',
    borderBottom: '1px solid #f0f0f0',
  },
  upperPart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagId: {
    color: 'gray',
    marginBottom: '4px',
    display: 'block',
  },
  text: {
    fontSize: '14px',
  },
  header: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '10px',
  },
}));

const createDateString = (date) => {
  const day = (`0${date.getDate()}`).slice(-2);
  const month = (`0${date.getMonth()}`).slice(-2);
  const year = date.getFullYear();

  const hours = (`0${date.getHours()}`).slice(-2);
  const minutes = (`0${date.getMinutes()}`).slice(-2);
  const seconds = (`0${date.getSeconds()}`).slice(-2);

  return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
};

const getIcon = (itemType) => {
  if (itemType === 'Started') {
    return TimerIcon;
  }
  if (itemType === 'Stopped') {
    return TimerOffIcon;
  }
  if (itemType === 'Created') {
    return CreatedIcon;
  }
  if (itemType === 'Finished') {
    return FinishedIcon;
  }
  if (itemType === 'Archived') {
    return ArchivedIcon;
  }

  return TimerOffIcon;
};

const HistoryItem = ({ item, availableTags }) => {
  const classes = useStyles();
  const date = new Date(item.date);
  const tags = availableTags.filter((tag) => (item.tags.indexOf(tag._id) >= 0));
  const Icon = getIcon(item.type);

  return (
    <div className={classes.itemContainer}>
      <div className={classes.upperPart}>
        <div>
          <div className={classes.header}>
            <Icon style={{ fontSize: '18px', color: '#3f3f44' }} />
            <Typography style={{ marginLeft: '7px' }} className={classes.text}>{item.type}</Typography>
          </div>
          <Typography variant="caption" className={classes.tagId}>
            {`taskId: #${item._id}`}
          </Typography>
          <Typography variant="caption" className={classes.tagId}>
            {`title: ${item.title}`}
          </Typography>
          <Typography variant="caption" className={classes.tagId}>
            tags: {tags.map((tag, index) => (
              <div style={{ display: 'inline-block' }}>
                <Typography style={{ color: tag.color }} variant="caption">{tag.tag}</Typography>
                { (index !== tags.length - 1) && <Typography variant="caption" style={{ marginRight: "5px" }}>,</Typography> }
              </div>
            ))}
          </Typography>
        </div>
        <div>
          <Typography className={classes.text}>{createDateString(date)}</Typography>
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
