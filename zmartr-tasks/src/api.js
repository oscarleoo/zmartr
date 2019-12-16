import express from 'express'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import createTask from './posts/createTask';
import getTasks from './gets/getTasks';
import startTask from './posts/startTask';
import stopTask from './posts/stopTask';
import finishTask from './posts/finishTask';
import archiveTask from './posts/archiveTask';
import orderTasks from './posts/orderTasks';

const { MONGO_HOST } = process.env;
const app = express()

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

const handleError = fn => (req, res, next) => {
    fn(req,res).catch((error) => next(error));
}

app.get('/tasks', handleError(async (req, res) => {
    const tasks = await getTasks()
    res.send(tasks)
}))

app.post('/startTask', handleError(async (req, res) => {
    const taskId = req.body.taskId
    const tasks = await startTask(taskId)
    res.send(tasks)
}))

app.post('/stopTask', handleError(async (req, res) => {
    const taskId = req.body.taskId
    const tasks = await stopTask(taskId)
    res.send(tasks)
}))

app.post('/finishTask', handleError(async (req, res) => {
    const taskId = req.body.taskId
    const tasks = await finishTask(taskId)
    res.send(tasks)
}))

app.post('/archiveTask', handleError(async (req, res) => {
    const taskId = req.body.taskId
    const tasks = await archiveTask(taskId)
    res.send(tasks)
}))

app.post('/orderTasks', handleError(async (req, res) => {
    const taskIds = req.body.taskIds
    const message = await orderTasks(taskIds)
    res.send(message)
}))

app.post('/createTask', handleError(async (req, res) => {
    const newTask = req.body.newTask
    const tasks = await createTask(newTask)
    res.send(tasks)
}))

mongoose.connect(`mongodb://${MONGO_HOST}:27017/startr`, {useNewUrlParser: true})
    .then(() => { app.listen(80, () => { console.log('Tasks microservice ready') }) })
    .catch(err => { console.log(err); });