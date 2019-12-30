import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const getTasks = (userId) => axios.get(`http://${TASKS_MICROSERVICE}/tasks?userId=${userId}`);

export default getTasks;
