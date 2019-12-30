import { ObjectId } from 'mongodb';
import { Task } from '../documents/Task';


const getUserTasks = (userId) => Promise.all([
  Task.find({ userId: ObjectId(userId), 'actions.type': { $nin: ['Finished', 'Archived'] } }).sort({ order: 1 }),
  Task.findOne({ userId: ObjectId(userId), selected: true }),
]);

export default getUserTasks;
