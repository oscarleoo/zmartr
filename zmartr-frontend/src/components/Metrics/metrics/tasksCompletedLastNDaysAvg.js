import nTasksCompleted from '../../../utils/metrics/nTasksCompleted';

export default (tasks, settings) => {
  const nDays = settings.nDays ? settings.nDays : 10;
  const score = Math.round(100 * (nTasksCompleted(tasks, nDays) / nDays)) / 100;
  const description = `Average number of tasks completed last ${nDays} days`;

  return { score, description };
};
