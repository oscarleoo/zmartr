import { ObjectId } from 'mongodb';
import { Task } from '../documents/Task';

const orderTasks = async (taskIds) => {
  taskIds.map(async (taskId, index) => {
    await Task.updateOne({ _id: ObjectId(taskId) }, { order: index });
  });

  return 'Success';
};

export default orderTasks;
