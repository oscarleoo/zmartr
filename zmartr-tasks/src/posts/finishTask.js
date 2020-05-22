import { ObjectId } from 'mongodb';
import Task from '../documents/Task';


const finishTask = (taskId, userId) => Task.updateOne(
  { _id: ObjectId(taskId), userId },
  {
    selected: false,
    $push: { actions: { type: 'Finished', date: Date.now() } },
  },
);

export default finishTask;
