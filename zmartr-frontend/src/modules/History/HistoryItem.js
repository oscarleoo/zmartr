import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';
import TimerIcon from '@material-ui/icons/Timer';
import TimerOffIcon from '@material-ui/icons/TimerOff';
import CreatedIcon from '@material-ui/icons/AddCircleOutline';
import FinishedIcon from '@material-ui/icons/CheckCircleOutline';
import ArchivedIcon from '@material-ui/icons/NotInterestedOutlined';
import HistoryRevertIcon from './HistoryRevertIcon';
import HistoryDateField from './HistoryDateField';


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
  icon: {
    fontSize: '18px',
    color: '#3f3f44',
  },
}));

const getIcon = (item, classes) => {
  if (item.type === 'Started') {
    return <TimerIcon className={classes.icon} />;
  }
  if (item.type === 'Stopped') {
    return <TimerOffIcon className={classes.icon} />;
  }
  if (item.type === 'Created') {
    return <CreatedIcon className={classes.icon} />;
  }
  if (item.type === 'Finished') {
    return <HistoryRevertIcon taskId={item._id} Icon={FinishedIcon} />;
  }
  if (item.type === 'Archived') {
    return <HistoryRevertIcon taskId={item._id} Icon={ArchivedIcon} />;
  }

  return TimerOffIcon;
};

const HistoryItem = ({ item, availableTags }) => {
  const classes = useStyles();
  const tags = availableTags.filter((tag) => (item.tags.indexOf(tag._id) >= 0));

  return (
    <div className={classes.itemContainer}>
      <div className={classes.upperPart}>
        <div>
          <div className={classes.header}>
            {getIcon(item, classes)}
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
              <div key={tag.tag} style={{ display: 'inline-block' }}>
                <Typography style={{ color: tag.color }} variant="caption">{tag.tag}</Typography>
                { (index !== tags.length - 1) && <Typography variant="caption" style={{ marginRight: "5px" }}>,</Typography> }
              </div>
            ))}
          </Typography>
        </div>
        <div>
          <HistoryDateField action={item} />
        </div>
      </div>
    </div>
  );
};

export default HistoryItem;
