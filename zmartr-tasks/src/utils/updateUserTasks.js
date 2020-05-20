import { ObjectId } from 'mongodb';
import Task from '../documents/Task';

const updateUserTasks = (userId, taskId, status) => Promise.all([
  Task.updateMany({ userId }, { selected: false }),
  Task.updateOne(
    { _id: ObjectId(taskId) },
    { $push: { actions: { type: status, date: Date.now() } } },
    { runValidators: true },
  ),
]);

export default updateUserTasks;
