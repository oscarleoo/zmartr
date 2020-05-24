import { ObjectId } from 'mongodb';
import Task from '../documents/Task';

const startTask = async (taskId, userId) => {
  const unSelected = await Task.findOneAndUpdate(
    { userId, selected: true },
    {
      selected: false,
      $push: { actions: { type: 'Stopped', date: Date.now() } },
    },
    { new: true },
  ).populate('tags');

  const selected = await Task.findOneAndUpdate(
    { _id: ObjectId(taskId) },
    {
      selected: true,
      $push: { actions: { type: 'Started', date: Date.now() } },
    },
    { new: true },
  ).populate('tags');

  return [unSelected, selected];
};

export default startTask;
