import getData from './utils/getData';
import postData from './utils/postData';

export const UPDATE_SEARCH_STRING = 'UPDATE_SEARCH_STRING';
export const GET_TASKS = 'GET_TASKS';
export const CREATE_TASK = 'CREATE_TASK';
export const START_TASK = 'START_TASK';
export const STOP_TASK = 'STOP_TASK';
export const UPDATE_TASK = 'UPDATE_TASK';
export const FINISH_TASK = 'FINISH_TASK';
export const ARCHIVE_TASK = 'ARCHIVE_TASK';
export const ORDER_TASKS = 'ORDER_TASKS';


export const updateSearchString = (text) => ({
  type: UPDATE_SEARCH_STRING, payload: { text },
});

export const getTasks = (token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return getData('api/getAllTasks', headers, GET_TASKS);
};

export const createTask = () => ({
  type: CREATE_TASK,
});

export const updateTaskTitle = (taskId, title, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/updateTaskTitle', { taskId, title }, headers, UPDATE_TASK);
};

export const startTask = (taskId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/startTask', { taskId }, headers, START_TASK);
};

export const stopTask = (taskId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/stopTask', { taskId }, headers, STOP_TASK);
};

export const finishTask = (taskId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/finishTask', { taskId }, headers, FINISH_TASK);
};

export const archiveTask = (taskId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/archiveTask', { taskId }, headers, ARCHIVE_TASK);
};

export const orderTasks = (taskIds, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/orderTasks', { taskIds }, headers, ORDER_TASKS);
};
