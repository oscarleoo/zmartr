import axios from 'axios';

const { REACT_APP_API_URL } = process.env;
export const CREATE_TAG = 'CREATE_TAG';
export const UPDATE_TAGS = 'UPDATE_TAGS';
export const OPEN_TAG_EDITOR = 'OPEN_TAG_EDITOR';
export const CLOSE_TAG_EDITOR = 'CLOSE_TAG_EDITOR';

export const postData = (url, data, headers, actionType) => ({
  type: actionType, payload: axios.post(`${REACT_APP_API_URL}/${url}`, data, { headers }),
});

export const createTag = (tag, color, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/createTag', { tag, color }, headers, CREATE_TAG);
};

export const addTagToTask = (taskId, tagId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/addTagToTask', { taskId, tagId }, headers, UPDATE_TAGS);
};

export const removeTagFromTask = (taskId, tagId, token) => {
  const headers = { Authorization: `Bearer ${token}` };
  return postData('api/removeTagFromTask', { taskId, tagId }, headers, UPDATE_TAGS);
};

export const openTagEditor = (task) => ({
  type: OPEN_TAG_EDITOR, payload: { task },
});

export const closeTagEditor = () => ({
  type: CLOSE_TAG_EDITOR,
});
