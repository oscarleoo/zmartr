import { ObjectId } from 'mongodb';
import Task from '../documents/Task';

const orderTasks = (taskIds) => Promise.all(taskIds.map((taskId, index) => (
  Task.updateOne({ _id: ObjectId(taskId) }, { order: index })
)));

export default orderTasks;
