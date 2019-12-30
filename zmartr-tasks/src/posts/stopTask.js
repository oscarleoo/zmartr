import getUserTasks from '../utils/getUserTasks';
import updateUserTasks from '../utils/updateUserTasks';

const stopTask = async (taskId, userId) => {
  await updateUserTasks(userId, taskId, 'Stopped');

  const [tasks, selectedTask] = await getUserTasks(userId);
  return { list: tasks, selected: selectedTask };
};

export default stopTask;
