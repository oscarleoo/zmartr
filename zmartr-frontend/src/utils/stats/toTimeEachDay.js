import mergeTimeLists from './mergeTimeLists';

const divideOnDays = (startTime, endTime, actionType, timeSpent) => {
  if (startTime.getDate() !== endTime.getDate()) {
    const nextDay = new Date(startTime.getTime() + 24 * 3600 * 1000);
    const nextDayStart = new Date(nextDay.getFullYear(), nextDay.getMonth(), nextDay.getDate());
    timeSpent.push({ day: startTime, time: nextDayStart - startTime });
    return divideOnDays(nextDayStart, endTime, actionType, timeSpent);
  }

  timeSpent.push({ day: startTime, time: endTime - startTime, actionType });
  return timeSpent;
};

const actionsToTimeEachDay = (actions, timeLists) => {
  let startTime;
  for (let i = 0; i < actions.length; i += 1) {
    if (actions[i].type === 'Started' && !startTime) {
      startTime = new Date(actions[i].date);
    }
    if (actions[i].type !== 'Started' && startTime) {
      const endTime = new Date(actions[i].date);
      divideOnDays(startTime, endTime, actions[i].type, timeLists);
      startTime = null;
    }
  }
};

const toTimeEachDay = (tasks) => {
  const timeEachDay = [];

  for (let i = 0; i < tasks.length; i += 1) {
    actionsToTimeEachDay(tasks[i].actions, timeEachDay);
  }

  return mergeTimeLists(timeEachDay);
};

export default toTimeEachDay;
