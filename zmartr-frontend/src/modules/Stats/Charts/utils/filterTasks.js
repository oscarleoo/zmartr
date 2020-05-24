
const filterOnStatus = (tasks, statusFilter) => {
  if (statusFilter.length > 0) {
    return tasks.filter((task) => (
      task.actions.length > 0 && statusFilter.includes(task.actions[task.actions.length - 1].type)
    ));
  }
  return tasks.slice();
};

const filterOnTags = (tasks, tagFilter) => {
  if (tagFilter.length > 0) {
    return tasks.filter((task) => {
      for (let i = 0; i < tagFilter.length; i += 1) {
        if (task.tags.filter((tag) => (tag.tag === tagFilter[i])).length > 0) {
          return true;
        }
      }

      return false;
    });
  }
  return tasks.slice();
};

export default (tasks, tagFilter, statusFilter) => {
  const filteredTasks = filterOnStatus(tasks, statusFilter);
  return filterOnTags(filteredTasks, tagFilter);
};
