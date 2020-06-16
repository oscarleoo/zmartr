
const createTimeObject = (numberOfDays) => {
  const timeObject = {};
  const today = new Date();
  for (let i = 0; i < numberOfDays; i += 1) {
    const date = new Date(today.getTime() - i * 1000 * 3600 * 24);
    const day = `${date.getFullYear()}-${date.getMonth()}-${date.getDate()}`;
    timeObject[day] = {
      day,
      date,
      time: 0,
      Started: 0,
      Stopped: 0,
      Finished: 0,
      Archived: 0,
    };
  }

  return timeObject;
};


const mergeTimeLists = (timeLists, nDays) => {
  const timeObject = createTimeObject(nDays);

  for (let i = 0; i < timeLists.length; i += 1) {
    const { startTime, time, actionType } = timeLists[i];
    const dayString = `${startTime.getFullYear()}-${startTime.getMonth()}-${startTime.getDate()}`;
    if (dayString in timeObject) {
      timeObject[dayString].time += time / 3600000;
      timeObject[dayString][actionType] += 1;
    }
  }

  const data = Object.values(timeObject).sort((a, b) => (a.date > b.date ? 1 : -1));
  data.forEach((item) => { item.time = Math.round(100 * item.time) / 100; });

  return data;
};

export default mergeTimeLists;
