import axios from 'axios'

export const GET_TASKS = 'GET_TASKS'
export const ADD_TASK = 'ADD_TASK'
export const START_TASK = 'START_TASK'
export const STOP_TASK = 'STOP_TASK'
export const FINISH_TASK = 'FINISH_TASK'
export const ARCHIVE_TASK = 'ARCHIVE_TASK'
export const ORDER_TASKS = 'ORDER_TASKS'

export const getTasks = () => {
    return { type: GET_TASKS, payload: axios.get('/getTasks') }
}

export const addTask = (newTask) => {
    return { type: ADD_TASK, payload: axios.post('/addTask', { newTask }) }
}

export const startTask = (taskId) => {
    return { type: START_TASK, payload: axios.post('/startTask', { taskId }) }
}

export const stopTask = (taskId) => {
    return { type: STOP_TASK, payload: axios.post('/stopTask', { taskId }) }
}

export const finishTask = (taskId) => {
    return { type: FINISH_TASK, payload: axios.post('/finishTask', { taskId }) }
}

export const archiveTask = (taskId) => {
    return { type: ARCHIVE_TASK, payload: axios.post('/archiveTask', { taskId }) }
}

export const orderTasks = (taskIds) => {
    return { type: ORDER_TASKS, payload: axios.post('/orderTasks', { taskIds }) }
}