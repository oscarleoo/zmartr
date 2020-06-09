import getData from './utils/getData';

export const GET_HISTORY = 'GET_HISTORY';

export const getHistory = (token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return getData('api/getHistory', headers, GET_HISTORY);
};
