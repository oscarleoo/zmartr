import mergeTimeLists from './mergeTimeLists';

const divideOnDays = (startTime, endTime, actionType, tags, timeLists) => {
  if (startTime.getDate() !== endTime.getDate()) {
    const nextDay = new Date(startTime.getTime() + 24 * 3600 * 1000);
    const nextDayStart = new Date(nextDay.getFullYear(), nextDay.getMonth(), nextDay.getDate());
    timeLists.push({
      startTime,
      endTime,
      time: nextDayStart - startTime,
      actionType,
      tags,
    });
    return divideOnDays(nextDayStart, endTime, actionType, tags, timeLists);
  }

  timeLists.push({
    startTime,
    endTime,
    time: endTime - startTime,
    actionType,
    tags,
  });
  return timeLists;
};

const actionsToTimeEachDay = (actions, tags, timeLists) => {
  let startTime;
  for (let i = 0; i < actions.length; i += 1) {
    if (actions[i].type === 'Started' && !startTime) {
      startTime = new Date(actions[i].date);
    }
    if (actions[i].type !== 'Started' && startTime) {
      const endTime = new Date(actions[i].date);
      divideOnDays(startTime, endTime, actions[i].type, tags, timeLists);
      startTime = null;
    }
  }
};

const toTimeEachDay = (tasks) => {
  const timeLists = [];

  for (let i = 0; i < tasks.length; i += 1) {
    actionsToTimeEachDay(tasks[i].actions, tasks[i].tags, timeLists);
  }

  return timeLists;
};

export default toTimeEachDay;
