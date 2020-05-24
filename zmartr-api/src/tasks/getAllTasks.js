import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const getAllTasks = (userId) => axios.get(`http://${TASKS_MICROSERVICE}/getAllTasks?userId=${userId}`);

export default getAllTasks;
