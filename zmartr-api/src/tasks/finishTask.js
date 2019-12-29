import axios from 'axios'

const { TASKS_MICROSERVICE } = process.env

const finishTask = (taskId) => {
    return axios.post(`http://${TASKS_MICROSERVICE}/finishTask`, { taskId })
}

export default finishTask