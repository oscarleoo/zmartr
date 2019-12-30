import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const createTask = (newTask, userId) => axios.post(`http://${TASKS_MICROSERVICE}/createTask`, { newTask, userId });

export default createTask;
