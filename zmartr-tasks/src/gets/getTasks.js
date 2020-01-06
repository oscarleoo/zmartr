import getUserTasks from '../utils/getUserTasks';

const getTasks = async (userId) => {
  const [tasks, selectedTask] = await getUserTasks(userId);
  return { list: tasks, selected: selectedTask };
};

export default getTasks;
