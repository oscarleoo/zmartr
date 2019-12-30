import cors from 'cors';
import express from 'express';
import bodyParser from 'body-parser';

import login from './authentication/login';
import register from './authentication/register';
import authenticationMiddleware from './middleware/authentication';
import getTasks from './tasks/getTasks';
import startTask from './tasks/startTask';
import stopTask from './tasks/stopTask';
import finishTask from './tasks/finishTask';
import archiveTask from './tasks/archiveTask';
import orderTasks from './tasks/orderTasks';
import createTask from './tasks/createTask';

const app = express();
const port = 5000;

app.use(bodyParser.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));

app.use(authenticationMiddleware);

const handleError = (fn) => (req, res, next) => {
  fn(req, res).catch((error) => {
    next(error);
  });
};

app.get('/getTasks', handleError(async (req, res) => {
  if (req.isAuth === false) {
    res.status(401).send();
  } else {
    const tasks = await getTasks(req.userId);
    res.send(tasks.data);
  }
}));

app.post('/createTask', handleError(async (req, res) => {
  if (req.isAuth === false) {
    res.status(401).send();
  } else {
    const { newTask } = req.body;
    const tasks = await createTask(newTask, req.userId);
    res.send(tasks.data);
  }
}));

app.post('/startTask', handleError(async (req, res) => {
  if (req.isAuth === false) {
    res.status(401).send();
  } else {
    const { taskId } = req.body;
    const tasks = await startTask(taskId, req.userId);
    res.send(tasks.data);
  }
}));

app.post('/stopTask', handleError(async (req, res) => {
  if (req.isAuth === false) {
    res.status(401).send();
  } else {
    const { taskId } = req.body;
    const tasks = await stopTask(taskId, req.userId);
    res.send(tasks.data);
  }
}));

app.post('/finishTask', handleError(async (req, res) => {
  if (req.isAuth === false) {
    res.status(401).send();
  } else {
    const { taskId } = req.body;
    const tasks = await finishTask(taskId, req.userId);
    res.send(tasks.data);
  }
}));

app.post('/archiveTask', handleError(async (req, res) => {
  if (req.isAuth === false) {
    res.status(401).send();
  } else {
    const { taskId } = req.body;
    const tasks = await archiveTask(taskId, req.userId);
    res.send(tasks.data);
  }
}));

app.post('/orderTasks', handleError(async (req, res) => {
  if (req.isAuth === false) {
    res.status(401).send();
  } else {
    const { taskIds } = req.body;
    const message = await orderTasks(taskIds);
    res.send(message.data);
  }
}));

app.get('/login', handleError(async (req, res) => {
  const loginResponse = await login(req.query.email, req.query.password);
  res.send(loginResponse.data);
}));

app.post('/register', handleError(async (req, res) => {
  const { email, password } = req.body;
  const registerResponse = await register(email, password);
  res.send(registerResponse.data);
}));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
