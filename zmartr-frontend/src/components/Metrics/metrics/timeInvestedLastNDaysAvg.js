import toTimeEachDay from '../../../utils/stats/toTimeEachDay';

export default (tasks, settings) => {
  const nDays = settings.nDays ? settings.nDays : 10;
  const timePerDay = toTimeEachDay(tasks, nDays);
  const time = timePerDay.map((day) => (day.time)).reduce((a, b) => a + b, 0) / nDays;
  const hours = Math.floor(time);
  const minutes = Math.round(60 * (time - hours));
  const description = `Average time invested last ${nDays} days`;
  return { score: `${hours}h ${minutes}m`, description };
};
