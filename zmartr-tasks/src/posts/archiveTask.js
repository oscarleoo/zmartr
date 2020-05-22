import { ObjectId } from 'mongodb';
import Task from '../documents/Task';


const archiveTask = (taskId, userId) => Task.updateOne(
  { _id: ObjectId(taskId), userId },
  {
    selected: false,
    $push: { actions: { type: 'Archived', date: Date.now() } },
  },
);

export default archiveTask;
