import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const removeTagFromTask = (taskId, tagId, userId) => axios.post(`http://${TASKS_MICROSERVICE}/removeTagFromTask`, { taskId, tagId, userId });

export default removeTagFromTask;