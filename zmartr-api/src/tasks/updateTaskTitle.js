import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const updateTaskTitle = (taskId, title, userId) => axios.post(`http://${TASKS_MICROSERVICE}/updateTaskTitle`, { taskId, title, userId });

export default updateTaskTitle;
