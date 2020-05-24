import Task from '../documents/Task';
import Tag from '../documents/Tag';


const getUserTasks = (userId, statuses) => Promise.all([
  Task.find({ userId, 'actions.type': { $nin: statuses } })
    .sort({ order: 1 })
    .populate('tags'),
  Tag.find({ userId }).sort('tag'),
]);

export default getUserTasks;
