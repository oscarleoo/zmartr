import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const createTag = (text, userId) => axios.post(`http://${TASKS_MICROSERVICE}/createTag`, { text, userId });

export default createTag;
