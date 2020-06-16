import { ObjectId } from 'mongodb';
import Task from '../../documents/Task';


const updateAction = async (taskId, actionIndex, date) => {
  console.log(taskId, actionIndex, date)
  const newDate = new Date(date).getTime();
  if (actionIndex >= 0) {
    return Task.findOne({ _id: ObjectId(taskId) }, (error, task) => {
      task.actions[actionIndex].date = newDate;
      task.save();
    });
  }

  return Task.updateOne({ _id: ObjectId(taskId) }, { created: newDate });
};

export default updateAction;
