import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const createTag = (tag, color, userId) => axios.post(`http://${TASKS_MICROSERVICE}/createTag`, { tag, color, userId });

export default createTag;
