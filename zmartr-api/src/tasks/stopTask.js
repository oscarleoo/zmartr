import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const stopTask = (taskId, userId) => axios.post(`http://${TASKS_MICROSERVICE}/stopTask`, { taskId, userId });

export default stopTask;
