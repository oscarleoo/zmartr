import axios from 'axios';

const { TASKS_MICROSERVICE } = process.env;

const orderTasks = (taskIds) => axios.post(`http://${TASKS_MICROSERVICE}/orderTasks`, { taskIds });

export default orderTasks;
