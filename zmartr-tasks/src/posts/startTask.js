import { ObjectId } from 'mongodb';
import getUserTasks from '../utils/getUserTasks';
import updateUserTasks from '../utils/updateUserTasks';
import { Task } from '../documents/Task';

const startTask = async (taskId, userId) => {
  await updateUserTasks(userId, taskId, 'Started');
  await Task.updateOne(
    { _id: ObjectId(taskId) },
    { selected: true },
  );

  const [tasks, selectedTask] = await getUserTasks(userId);
  return { list: tasks, selected: selectedTask };
};

export default startTask;
