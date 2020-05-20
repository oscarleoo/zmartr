import Task from '../documents/Task';
import Tag from '../documents/Tag';


const getUserTasks = (userId) => Promise.all([
  Task.find({ userId, 'actions.type': { $nin: ['Finished', 'Archived'] } })
    .sort({ order: 1 })
    .populate('tags'),
  Task.findOne({ userId, selected: true }),
  Tag.find({ userId }),
]);

export default getUserTasks;
