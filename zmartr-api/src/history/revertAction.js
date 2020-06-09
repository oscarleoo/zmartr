import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const revertAction = (taskId, userId) => axios.post(`http://${TASKS_MICROSERVICE}/revertAction`, { taskId, userId });

export default revertAction;
