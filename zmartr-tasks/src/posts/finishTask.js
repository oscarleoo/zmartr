import { ObjectId } from 'mongodb';
import Task from '../documents/Task';


const finishTask = (taskId, userId) => Task.findOneAndUpdate(
  { _id: ObjectId(taskId), userId },
  {
    selected: false,
    $push: { actions: { type: 'Finished', date: Date.now() } },
  },
  { new: true },
);

export default finishTask;
