import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Collapse } from '@material-ui/core';


const useStyles = makeStyles((theme) => ({
  itemContainer: {
    padding: '12px 0',
    borderBottom: '1px solid #f0f0f0',
  },
  upperPart: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  tagId: {
    color: 'gray',
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

const HistoryItem = ({ item }) => {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const openDetails = () => { setOpen(true); };
  const closeDetails = () => { setOpen(false); };
  const date = new Date(item.date);

  return (
    <div className={classes.itemContainer} onMouseEnter={openDetails} onMouseLeave={closeDetails}>
      <div className={classes.upperPart}>
        <div>
          <Typography variant="caption" className={classes.tagId}>
            {`taskId: #${item._id}`}
          </Typography>
          <Typography>{item.type}</Typography>
        </div>
        <div>
          <Typography>{createDateString(date)}</Typography>
        </div>
      </div>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <div className={classes.taskDetailsContainer}>
          <Typography>{item.title}</Typography>
        </div>
      </Collapse>
    </div>
  );
};

export default HistoryItem;
