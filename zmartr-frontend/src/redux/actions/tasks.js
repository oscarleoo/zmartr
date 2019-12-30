import axios from 'axios';
import { createMessage } from './message';

export const GET_TASKS = 'GET_TASKS';
export const ADD_TASK = 'ADD_TASK';
export const START_TASK = 'START_TASK';
export const STOP_TASK = 'STOP_TASK';
export const FINISH_TASK = 'FINISH_TASK';
export const ARCHIVE_TASK = 'ARCHIVE_TASK';
export const ORDER_TASKS = 'ORDER_TASKS';

export const getData = (url, headers, actionType) => ({
  type: actionType, payload: axios.get(url, { headers }),
});

export const postData = (url, data, headers, actionType) => ({
  type: actionType, payload: axios.post(url, data, { headers }),
});

export const getTasks = () => (dispatch, getState) => {
  const { token } = getState().authentication;
  const headers = { Authorization: `Bearer ${token}` };
  dispatch(getData('/api/getTasks', headers, GET_TASKS));
};

export const createTask = (newTask) => (dispatch, getState) => {
  if (newTask.length < 10) {
    dispatch(createMessage('Task description is to short', 'warning'));
  } else if (newTask.length > 1000) {
    dispatch(createMessage('Task description is to long', 'warning'));
  } else {
    const { token } = getState().authentication;
    const headers = { Authorization: `Bearer ${token}` };
    dispatch(postData('/api/createTask', { newTask }, headers, ADD_TASK));
  }
};

export const startTask = (taskId) => (dispatch, getState) => {
  const { token } = getState().authentication;
  const headers = { Authorization: `Bearer ${token}` };
  dispatch(postData('/api/startTask', { taskId }, headers, START_TASK));
};

export const stopTask = (taskId) => (dispatch, getState) => {
  const { token } = getState().authentication;
  const headers = { Authorization: `Bearer ${token}` };
  dispatch(postData('/api/stopTask', { taskId }, headers, STOP_TASK));
};

export const finishTask = (taskId) => (dispatch, getState) => {
  const { token } = getState().authentication;
  const headers = { Authorization: `Bearer ${token}` };
  dispatch(postData('/api/finishTask', { taskId }, headers, FINISH_TASK));
};

export const archiveTask = (taskId) => (dispatch, getState) => {
  const { token } = getState().authentication;
  const headers = { Authorization: `Bearer ${token}` };
  dispatch(postData('/api/archiveTask', { taskId }, headers, ARCHIVE_TASK));
};

export const orderTasks = (taskIds) => (dispatch, getState) => {
  const { token } = getState().authentication;
  const headers = { Authorization: `Bearer ${token}` };
  dispatch(postData('/api/orderTasks', { taskIds }, headers, ORDER_TASKS));
};
