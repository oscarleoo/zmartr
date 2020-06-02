import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import startTask from './posts/startTask';
import stopTask from './posts/stopTask';
import finishTask from './posts/finishTask';
import archiveTask from './posts/archiveTask';
import orderTasks from './posts/orderTasks';
import updateTaskTitle from './posts/updateTaskTitle';
import addTagToTask from './posts/tags/addTagToTask';
import removeTagFromTask from './posts/tags/removeTagFromTask';
import createTag from './posts/tags/createTag';
import getActiveTasks from './gets/getActiveTasks';
import getAllTasks from './gets/getAllTasks';

const { MONGO_CONNECTION_STRING } = process.env;
console.log(MONGO_CONNECTION_STRING)
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const handleError = (fn) => (req, res, next) => {
  fn(req, res).catch((error) => next(error));
};

app.get('/getActiveTasks', handleError(async (req, res) => {
  const { userId } = req.query;
  const tasks = await getActiveTasks(userId);
  res.send(tasks);
}));

app.get('/getAllTasks', handleError(async (req, res) => {
  const { userId } = req.query;
  const tasks = await getAllTasks(userId);
  res.send(tasks);
}));

app.post('/updateTaskTitle', handleError(async (req, res) => {
  const { taskId, title, userId } = req.body;
  const task = await updateTaskTitle(taskId, title, userId);
  res.send(task);
}));

app.post('/startTask', handleError(async (req, res) => {
  const { taskId, userId } = req.body;
  const tasks = await startTask(taskId, userId);
  res.send(tasks);
}));

app.post('/stopTask', handleError(async (req, res) => {
  const { taskId, userId } = req.body;
  const task = await stopTask(taskId, userId);
  res.send(task);
}));

app.post('/finishTask', handleError(async (req, res) => {
  const { taskId, userId } = req.body;
  const task = await finishTask(taskId, userId);
  res.send(task);
}));

app.post('/archiveTask', handleError(async (req, res) => {
  const { taskId, userId } = req.body;
  const task = await archiveTask(taskId, userId);
  res.send(task);
}));

app.post('/orderTasks', handleError(async (req, res) => {
  const { taskIds } = req.body;
  await orderTasks(taskIds);
  res.send(taskIds);
}));

app.post('/createTag', handleError(async (req, res) => {
  const { tag, color, userId } = req.body;
  const newTag = await createTag(tag, color, userId);
  res.send(newTag);
}));

app.post('/addTagToTask', handleError(async (req, res) => {
  const { taskId, tagId, userId } = req.body;
  const task = await addTagToTask(taskId, tagId, userId);
  res.send(task);
}));

app.post('/removeTagFromTask', handleError(async (req, res) => {
  const { taskId, tagId, userId } = req.body;
  const task = await removeTagFromTask(taskId, tagId, userId);
  res.send(task);
}));

mongoose.connect(MONGO_CONNECTION_STRING, { useUnifiedTopology: true })
  .then(() => {
    app.listen(80, () => {
      console.log('Tasks microservice ready! :)');
    });
  })
  .catch((err) => { console.log(err); });
