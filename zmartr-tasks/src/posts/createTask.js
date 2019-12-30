import { ObjectId } from 'mongodb';
import { Task } from '../documents/Task';
import getUserTasks from '../utils/getUserTasks';

const createTask = async (newTask, userId) => {
  const [tasks, selectedTask] = await getUserTasks(userId);

  let order = 0;
  if (tasks.length > 0) {
    order = tasks[tasks.length - 1].order + 1;
  }

  const task = await Task({
    title: newTask, created: Date.now(), order, userId: ObjectId(userId),
  }).save();
  tasks.push(task);

  return { list: tasks, selected: selectedTask };
};

export default createTask;
