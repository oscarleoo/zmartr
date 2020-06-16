import toTimeEachDay from '../../../utils/stats/toTimeEachDay';
import mergeTimeLists from '../../../utils/stats/mergeTimeLists';

export default (tasks) => {
  const timePerDay = mergeTimeLists(toTimeEachDay(tasks), 1);
  const hours = Math.floor(timePerDay[0].time);
  const minutes = Math.round(60 * (timePerDay[0].time - hours));
  const description = 'Total time invested today';
  return { score: `${hours}h ${minutes}m`, description };
};
