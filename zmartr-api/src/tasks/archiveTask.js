import axios from 'axios'

const { TASKS_MICROSERVICE } = process.env

const archiveTask = (taskId) => {
    return axios.post(`http://${TASKS_MICROSERVICE}/archiveTask`, { taskId })
}

export default archiveTask