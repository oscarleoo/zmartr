import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const archiveTask = (taskId, userId) => axios.post(`http://${TASKS_MICROSERVICE}/archiveTask`, { taskId, userId });

export default archiveTask;
