import getData from './utils/getData';
import postData from './utils/postData';

export const GET_HISTORY = 'GET_HISTORY';
export const REVERT_ACTION = 'REVERT_ACTION';
export const UPDATE_ACTION = 'UPDATE_ACTION';

export const getHistory = (token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return getData('api/getHistory', headers, GET_HISTORY);
};

export const revertAction = (taskId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/revertAction', { taskId }, headers, REVERT_ACTION);
};

export const updateAction = (taskId, actionIndex, date, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/updateAction', { taskId, actionIndex, date }, headers, UPDATE_ACTION);
};
