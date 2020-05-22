import { ObjectId } from 'mongodb';
import Task from '../documents/Task';

const updateTaskTitle = async (taskId, title, userId) => {
  if (taskId === 'tempId') {
    return Task({
      title, created: Date.now(), order: 1000, userId,
    }).save();
  }
  return Task.findOneAndUpdate(
    { _id: ObjectId(taskId), userId },
    { title },
    { runValidators: true, new: true },
  ).populate('tags');
};

export default updateTaskTitle;
