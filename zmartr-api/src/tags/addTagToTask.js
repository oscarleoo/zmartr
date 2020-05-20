import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const addTagToTask = (taskId, tagId, userId) => axios.post(`http://${TASKS_MICROSERVICE}/addTagToTask`, { taskId, tagId, userId });

export default addTagToTask;
