import getUserTasks from '../utils/getUserTasks';
import updateUserTasks from '../utils/updateUserTasks';

const archiveTask = async (taskId, userId) => {
  await updateUserTasks(userId, taskId, 'Archived');

  const [tasks, selectedTask, tags] = await getUserTasks(userId);
  return { list: tasks, selected: selectedTask, availableTags: tags };
};

export default archiveTask;
