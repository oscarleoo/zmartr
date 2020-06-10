import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import authentication from './middleware/authentication';
import startTask from './tasks/startTask';
import stopTask from './tasks/stopTask';
import finishTask from './tasks/finishTask';
import archiveTask from './tasks/archiveTask';
import orderTasks from './tasks/orderTasks';
import createTask from './tasks/createTask';
import updateTaskTitle from './tasks/updateTaskTitle';
import addTagToTask from './tags/addTagToTask';
import removeTagFromTask from './tags/removeTagFromTask';
import createTag from './tags/createTag';
import updateTag from './tags/updateTag';
import getActiveTasks from './tasks/getActiveTasks';
import getAllTasks from './tasks/getAllTasks';
import hideTag from './tags/hideTag';
import getHistory from './history/getHistory';
import revertAction from './history/revertAction';
import updateAction from './history/updateAction';

const app = express();
const port = 5000;

app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(authentication);
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const handleError = (fn) => (req, res, next) => {
  fn(req, res).catch((error) => {
    next(error);
  });
};

app.get('/api/getActiveTasks', handleError(async (req, res) => {
  const userId = req.user.sub;
  const tasks = await getActiveTasks(userId);
  res.send(tasks.data);
}));

app.get('/api/getAllTasks', handleError(async (req, res) => {
  const userId = req.user.sub;
  const tasks = await getAllTasks(userId);
  res.send(tasks.data);
}));

app.post('/api/createTask', handleError(async (req, res) => {
  const userId = req.user.sub;
  const { newTask } = req.body;
  const tasks = await createTask(newTask, userId);
  res.send(tasks.data);
}));

app.post('/api/updateTaskTitle', handleError(async (req, res) => {
  const { taskId, title } = req.body;
  const userId = req.user.sub;
  const tasks = await updateTaskTitle(taskId, title, userId);
  res.send(tasks.data);
}));

app.post('/api/startTask', handleError(async (req, res) => {
  const { taskId } = req.body;
  const userId = req.user.sub;
  const tasks = await startTask(taskId, userId);
  res.send(tasks.data);
}));

app.post('/api/stopTask', handleError(async (req, res) => {
  const { taskId } = req.body;
  const userId = req.user.sub;
  const tasks = await stopTask(taskId, userId);
  res.send(tasks.data);
}));

app.post('/api/finishTask', handleError(async (req, res) => {
  const { taskId } = req.body;
  const userId = req.user.sub;
  const tasks = await finishTask(taskId, userId);
  res.send(tasks.data);
}));

app.post('/api/archiveTask', handleError(async (req, res) => {
  const { taskId } = req.body;
  const userId = req.user.sub;
  const tasks = await archiveTask(taskId, userId);
  res.send(tasks.data);
}));

app.post('/api/orderTasks', handleError(async (req, res) => {
  const { taskIds } = req.body;
  const message = await orderTasks(taskIds);
  res.send(message.data);
}));

app.post('/api/createTag', handleError(async (req, res) => {
  const userId = req.user.sub;
  const { text } = req.body;
  const tag = await createTag(text, userId);
  res.send(tag.data);
}));

app.post('/api/updateTag', handleError(async (req, res) => {
  const userId = req.user.sub;
  const { tagId, text, color } = req.body;
  const tag = await updateTag(tagId, text, color, userId);
  res.send(tag.data);
}));

app.post('/api/addTagToTask', handleError(async (req, res) => {
  const userId = req.user.sub;
  const { taskId, tagId } = req.body;
  const tags = await addTagToTask(taskId, tagId, userId);
  res.send(tags.data);
}));

app.post('/api/removeTagFromTask', handleError(async (req, res) => {
  const userId = req.user.sub;
  const { taskId, tagId } = req.body;
  const tags = await removeTagFromTask(taskId, tagId, userId);
  res.send(tags.data);
}));

app.post('/api/hideTag', handleError(async (req, res) => {
  const userId = req.user.sub;
  const { tagId } = req.body;
  const tag = await hideTag(tagId, userId);
  res.send(tag.data);
}));

app.get('/api/getHistory', handleError(async (req, res) => {
  const userId = req.user.sub;
  const history = await getHistory(userId);
  res.send(history.data);
}));

app.post('/api/revertAction', handleError(async (req, res) => {
  const userId = req.user.sub;
  const { taskId } = req.body;
  await revertAction(taskId, userId);
  res.send(taskId);
}));

app.post('/api/updateAction', handleError(async (req, res) => {
  const userId = req.user.sub;
  const { taskId, actionIndex, date } = req.body;
  await updateAction(taskId, actionIndex, date, userId);
  res.send({ taskId, actionIndex, date });
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
