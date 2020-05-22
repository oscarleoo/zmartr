import { ObjectId } from 'mongodb';
import Task from '../documents/Task';

const stopTask = (taskId, userId) => Task.findOneAndUpdate(
  { _id: ObjectId(taskId), userId, selected: true },
  {
    selected: false,
    $push: { actions: { type: 'Stopped', date: Date.now() } },
  },
  { new: true },
).populate('tags');


export default stopTask;
