import nTasksCompleted from '../../../utils/metrics/nTasksCompleted';

export default (tasks) => {
  const score = nTasksCompleted(tasks, 0);
  const description = 'Number of tasks completed today';

  return { score, description };
};
