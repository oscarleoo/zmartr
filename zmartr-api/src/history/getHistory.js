import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const getHistory = (userId) => axios.get(`http://${TASKS_MICROSERVICE}/getHistory?userId=${userId}`);

export default getHistory;
