import nTasksCompleted from '../../../utils/metrics/nTasksCompleted';

export default (tasks, settings) => {
  const nDays = settings.nDays ? settings.nDays : 10;
  const score = nTasksCompleted(tasks, nDays);
  const description = `Number of tasks completed last ${nDays} days`;

  return { score, description };
};
