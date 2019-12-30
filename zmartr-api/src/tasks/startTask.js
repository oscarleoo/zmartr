import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const startTask = (taskId, userId) => axios.post(`http://${TASKS_MICROSERVICE}/startTask`, { taskId, userId });

export default startTask;
