
export const ADD_TO_TAGS = 'ADD_TO_TAGS';
export const REMOVE_FROM_TAGS = 'REMOVE_FROM_TAGS';
export const ADD_TO_STATUS = 'ADD_TO_STATUS';
export const REMOVE_FROM_STATUS = 'REMOVE_FROM_STATUS';

export const addToTags = (tag) => ({
  type: ADD_TO_TAGS, payload: tag,
});

export const removeFromTags = (tag) => ({
  type: REMOVE_FROM_TAGS, payload: tag,
});

export const addToStatus = (status) => ({
  type: ADD_TO_STATUS, payload: status,
});

export const removeFromStatus = (status) => ({
  type: REMOVE_FROM_STATUS, payload: status,
});
