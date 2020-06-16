import toTimeEachDay from '../../../utils/stats/toTimeEachDay';
import mergeTimeLists from '../../../utils/stats/mergeTimeLists';

export default (tasks) => {
  const tasksWithActions = tasks.filter((task) => task.actions.length > 0);
  const tasksInBacklog = tasksWithActions.filter((task) => ['Status', 'Stopped'].indexOf(
    task.actions[task.actions.length - 1].type,
  ) >= 0);
  const timePerDay = mergeTimeLists(toTimeEachDay(tasksInBacklog), 100);
  const time = timePerDay.map((day) => (day.time)).reduce((a, b) => a + b, 0);
  const hours = Math.floor(time);
  const minutes = Math.round(60 * (time - hours));
  const description = 'Total time invested in backlog';
  return { score: `${hours}h ${minutes}m`, description };
};
