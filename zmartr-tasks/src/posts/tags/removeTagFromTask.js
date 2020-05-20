import { ObjectId } from 'mongodb';
import Task from '../../documents/Task';

const removeTagFromTask = async (taskId, tagId, userId) => {
  await Task.updateOne(
    { _id: ObjectId(taskId), userId },
    { $pull: { tags: ObjectId(tagId) } },
  );

  return Task.findOne(
    { _id: ObjectId(taskId), userId },
  ).populate('tags');
};

export default removeTagFromTask;
