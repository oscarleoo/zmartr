import getUserTasks from '../utils/getUserTasks';

const getTasks = async (userId) => {
  const [tasks, selectedTask, tags] = await getUserTasks(userId);
  return { list: tasks, selected: selectedTask, availableTags: tags };
};

export default getTasks;
