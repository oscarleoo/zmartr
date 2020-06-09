import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const updateAction = (taskId, actionIndex, date, userId) => axios.post(`http://${TASKS_MICROSERVICE}/updateAction`, {
  taskId, actionIndex, date, userId,
});

export default updateAction;
