import { ObjectId } from 'mongodb';
import Task from '../documents/Task';

const startTask = (taskId, userId) => Promise.all([
  Task.findOneAndUpdate(
    { userId, selected: true },
    {
      selected: false,
      $push: { actions: { type: 'Stopped', date: Date.now() } },
    },
    { new: true },
  ).populate('tags'),
  Task.findOneAndUpdate(
    { _id: ObjectId(taskId) },
    {
      selected: true,
      $push: { actions: { type: 'Started', date: Date.now() } },
    },
    { new: true },
  ).populate('tags'),
]);


export default startTask;
