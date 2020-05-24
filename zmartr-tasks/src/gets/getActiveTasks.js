import getUserTasks from '../utils/getUserTasks';

const getActiveTasks = async (userId) => {
  const [tasks, tags] = await getUserTasks(
    userId, ['Finished', 'Archived'],
  );
  return { list: tasks, availableTags: tags };
};

export default getActiveTasks;
