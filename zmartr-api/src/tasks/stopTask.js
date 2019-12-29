import axios from 'axios'

const { TASKS_MICROSERVICE } = process.env

const stopTask = (taskId) => {
    return axios.post(`http://${TASKS_MICROSERVICE}/stopTask`, { taskId })
}

export default stopTask