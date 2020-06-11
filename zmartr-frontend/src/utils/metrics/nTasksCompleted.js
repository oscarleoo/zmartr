
export default (tasks, nDays) => (
  tasks.filter((task) => {
    if (task.actions.length === 0) {
      return false;
    }

    const lastAction = task.actions[task.actions.length - 1];
    if (lastAction.type !== 'Finished') {
      return false;
    }

    const today = new Date();
    const afterDate = new Date(
      today.getFullYear(),
      today.getMonth(),
      today.getDate(),
    ) - nDays * 24 * 3600 * 1000;

    if (new Date(lastAction.date).getTime() < afterDate) {
      return false;
    }

    return true;
  }).length
);
