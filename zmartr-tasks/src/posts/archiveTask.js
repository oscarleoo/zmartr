import { ObjectId } from 'mongodb';
import Task from '../documents/Task';


const archiveTask = (taskId, userId) => Task.findOneAndUpdate(
  { _id: ObjectId(taskId), userId },
  {
    selected: false,
    $push: { actions: { type: 'Archived', date: Date.now() } },
  },
  { new: true },
);

export default archiveTask;
