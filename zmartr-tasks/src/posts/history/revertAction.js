import { ObjectId } from 'mongodb';
import Task from '../../documents/Task';


const revertAction = async (taskId, userId) => {
  const { actions } = await Task.findById(ObjectId(taskId));
  const query = { _id: ObjectId(taskId), userId, 'actions.type': { $in: ['Finished', 'Archived'] } };
  if (actions[actions.length - 2].type === 'Started') {
    actions[actions.length - 1].type = 'Stopped';
    return Task.updateOne(query, { actions });
  }
  return Task.updateOne(query, { $pop: { actions: 1 } });
};

export default revertAction;
