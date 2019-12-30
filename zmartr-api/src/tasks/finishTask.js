import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const finishTask = (taskId, userId) => axios.post(`http://${TASKS_MICROSERVICE}/finishTask`, { taskId, userId });

export default finishTask;
