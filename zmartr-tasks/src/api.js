import express from 'express';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';

import createTask from './posts/createTask';
import getTasks from './gets/getTasks';
import startTask from './posts/startTask';
import stopTask from './posts/stopTask';
import finishTask from './posts/finishTask';
import archiveTask from './posts/archiveTask';
import orderTasks from './posts/orderTasks';

const { MONGO_USERNAME, MONGO_PASSWORD } = process.env;
const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

const handleError = (fn) => (req, res, next) => {
  fn(req, res).catch((error) => next(error));
};

app.get('/tasks', handleError(async (req, res) => {
  const { userId } = req.query;
  const tasks = await getTasks(userId);
  res.send(tasks);
}));

app.post('/startTask', handleError(async (req, res) => {
  const { taskId, userId } = req.body;
  const tasks = await startTask(taskId, userId);
  res.send(tasks);
}));

app.post('/stopTask', handleError(async (req, res) => {
  const { taskId, userId } = req.body;
  const tasks = await stopTask(taskId, userId);
  res.send(tasks);
}));

app.post('/finishTask', handleError(async (req, res) => {
  const { taskId, userId } = req.body;
  const tasks = await finishTask(taskId, userId);
  res.send(tasks);
}));

app.post('/archiveTask', handleError(async (req, res) => {
  const { taskId, userId } = req.body;
  const tasks = await archiveTask(taskId, userId);
  res.send(tasks);
}));

app.post('/orderTasks', handleError(async (req, res) => {
  const { taskIds } = req.body;
  const message = await orderTasks(taskIds);
  res.send(message);
}));

app.post('/createTask', handleError(async (req, res) => {
  const { newTask, userId } = req.body;
  const tasks = await createTask(newTask, userId);
  res.send(tasks);
}));

mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@dcrowd-gk9yg.mongodb.net/zmartr-tasks?retryWrites=true&w=majority`, { useUnifiedTopology: true })
  .then(() => {
    app.listen(80, () => {
      console.log('Tasks microservice ready!');
    });
  })
  .catch((err) => { console.log(err); });
