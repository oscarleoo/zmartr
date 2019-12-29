import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const startTask = (taskId) => {
    return axios.post(`http://${TASKS_MICROSERVICE}/startTask`, { taskId })
}

export default startTask