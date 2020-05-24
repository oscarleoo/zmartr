import getUserTasks from '../utils/getUserTasks';

const getAllTasks = async (userId) => {
  const [tasks, tags] = await getUserTasks(
    userId, [],
  );
  return { list: tasks, availableTags: tags };
};

export default getAllTasks;
