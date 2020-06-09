import Task from '../documents/Task';

const getHistory = async (userId) => {
  const history = [];
  const tasks = await Task.find({ userId });
  for (let i = 0; i < tasks.length; i += 1) {
    history.push({
      _id: tasks[i]._id,
      date: tasks[i].created,
      type: 'Created',
      title: tasks[i].title,
      tags: tasks[i].tags,
    });

    for (let j = 0; j < tasks[i].actions.length; j += 1) {
      history.push({
        _id: tasks[i]._id,
        date: tasks[i].actions[j].date,
        type: tasks[i].actions[j].type,
        title: tasks[i].title,
        tags: tasks[i].tags,
        index: j,
      });
    }
  }

  return history.sort((a, b) => (a.date > b.date ? -1 : 1));
};

export default getHistory;
