
export const ADD_TO_TAGS = 'ADD_TO_TAGS';
export const REMOVE_FROM_TAGS = 'REMOVE_FROM_TAGS';
export const ADD_TO_STATUS = 'ADD_TO_STATUS';
export const REMOVE_FROM_STATUS = 'REMOVE_FROM_STATUS';

export const addToTags = (tagId) => () => ({
  type: ADD_TO_TAGS, payload: tagId,
});

export const removeFromTags = (tagId) => () => ({
  type: REMOVE_FROM_TAGS, payload: tagId,
});

export const addToStatus = (status) => () => ({
  type: ADD_TO_STATUS, payload: status,
});

export const removeFromStatus = (status) => () => ({
  type: REMOVE_FROM_STATUS, payload: status,
});
