import getUserTasks from '../utils/getUserTasks';
import updateUserTasks from '../utils/updateUserTasks';

const finishTask = async (taskId, userId) => {
  await updateUserTasks(userId, taskId, 'Finished');

  const [tasks, selectedTask, tags] = await getUserTasks(userId);
  return { list: tasks, selected: selectedTask, availableTags: tags };
};

export default finishTask;
