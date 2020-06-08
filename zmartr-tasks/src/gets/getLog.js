import Task from '../documents/Task';

const getLog = async (userId) => {
  const log = [];
  const tasks = await Task.find({ userId });
  for (let i = 0; i < tasks.length; i += 1) {
    log.push({
      date: tasks[i].created,
      type: 'Created',
      text: tasks[i].text,
      tags: tasks[i].tags,
    });

    for (let j = 0; j < tasks[i].actions.length; j += 1) {
      log.push({
        date: tasks[i].actions[j].date,
        type: tasks[i].actions[j].type,
        text: tasks[i].text,
        tags: tasks[i].tags,
      });
    }
  }

  return log;
};

export default getLog;
