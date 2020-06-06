import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const updateTag = (tagId, text, color, userId) => axios.post(`http://${TASKS_MICROSERVICE}/updateTag`, {
  tagId, text, color, userId,
});

export default updateTag;
