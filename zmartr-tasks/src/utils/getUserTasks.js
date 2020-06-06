import Task from '../documents/Task';
import Tag from '../documents/Tag';


const getUserTasks = (userId, statuses) => Promise.all([
  Task.find({ userId, 'actions.type': { $nin: statuses } })
    .sort({ order: 1 }),
  Tag.find({ userId, hidden: { $ne: true } }).sort('tag'),
]);

export default getUserTasks;
