import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const hideTag = (tagId, userId) => axios.post(`http://${TASKS_MICROSERVICE}/hideTag`, { tagId, userId });

export default hideTag;
