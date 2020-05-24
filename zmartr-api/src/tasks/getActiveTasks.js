import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const getActiveTasks = (userId) => axios.get(`http://${TASKS_MICROSERVICE}/getActiveTasks?userId=${userId}`);

export default getActiveTasks;
