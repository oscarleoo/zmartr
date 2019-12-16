import cors = require('cors')
import express = require('express')
import bodyParser = require('body-parser')

import login from './authentication/login'
import register from './authentication/register'
import authenticationMiddleware from './middleware/authentication'
import addTask from './tasks/addTask'
import getTasks from './tasks/getTasks'
import startTask from './tasks/startTask'
import stopTask from './tasks/stopTask'
import finishTask from './tasks/finishTask'
import archiveTask from './tasks/archiveTask'
import orderTasks from './tasks/orderTasks'

const app = express()
const port = 5000

app.use(bodyParser.json())
app.use(cors({
    origin: 'http://localhost:3000',
    credentials: true,
}));

app.use(authenticationMiddleware)

const handleError = fn => (req, res, next) => {
    fn(req, res).catch((error) => next(error));
}

app.get('/getTasks', handleError(async (req, res) => {
    const tasks = await getTasks()
    res.send(tasks.data)
}))

app.post('/addTask', handleError(async (req, res) => {

    const newTask = req.body.newTask
    const tasks = await addTask(newTask)
    res.send(tasks.data)

}))

app.post('/startTask', handleError(async (req, res) => {
    const taskId = req.body.taskId
    const tasks = await startTask(taskId)
    res.send(tasks.data)
}))

app.post('/stopTask', handleError(async (req, res) => {
    const taskId = req.body.taskId
    const tasks = await stopTask(taskId)
    res.send(tasks.data)
}))

app.post('/finishTask', handleError(async (req, res) => {
    const taskId = req.body.taskId
    const tasks = await finishTask(taskId)
    res.send(tasks.data)
}))

app.post('/archiveTask', handleError(async (req, res) => {
    const taskId = req.body.taskId
    const tasks = await archiveTask(taskId)
    res.send(tasks.data)
}))

app.post('/orderTasks', handleError(async (req, res) => {
    const taskIds = req.body.taskIds
    const message = await orderTasks(taskIds)
    res.send(message.data)
}))

app.get('/login', handleError(async (req, res) => {
    const loginResponse = await login(req.query.email, req.query.password)
    res.send(loginResponse.data)
}))

app.get('/register', handleError(async (req, res) => {
    const registerResponse = await register(req.query.firstName, req.query.lastName, req.query.email, req.query.password)
    res.send(registerResponse.data)
}))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))