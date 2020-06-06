import postData from './utils/postData';

export const CREATE_TAG = 'CREATE_TAG';
export const HIDE_TAG = 'HIDE_TAG';
export const UPDATE_TAG = 'UPDATE_TAG';
export const UPDATE_TAGS = 'UPDATE_TAGS';


export const createTag = (text, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/createTag', { text }, headers, CREATE_TAG);
};

export const updateTag = (tagId, text, color, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/updateTag', { tagId, text, color }, headers, UPDATE_TAG);
};

export const addTagToTask = (taskId, tagId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/addTagToTask', { taskId, tagId }, headers, UPDATE_TAGS);
};

export const removeTagFromTask = (taskId, tagId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/removeTagFromTask', { taskId, tagId }, headers, UPDATE_TAGS);
};

export const hideTag = (tagId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/hideTag', { tagId }, headers, HIDE_TAG);
};
