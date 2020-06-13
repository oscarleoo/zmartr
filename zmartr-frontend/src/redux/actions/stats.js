
export const ADD_CHART = 'ADD_CHART';
export const NEXT_CHART = 'NEXT_CHART';
export const LAST_CHART = 'LAST_CHART';
export const ADD_METRIC = 'ADD_METRIC';
export const NEXT_METRIC = 'NEXT_METRIC';
export const LAST_METRIC = 'LAST_METRIC';
export const ADD_TO_TAGS = 'ADD_TO_TAGS';
export const REMOVE_FROM_TAGS = 'REMOVE_FROM_TAGS';
export const ADD_TO_STATUS = 'ADD_TO_STATUS';
export const REMOVE_FROM_STATUS = 'REMOVE_FROM_STATUS';
export const ADD_METRIC_SETTING = 'ADD_METRIC_SETTING';

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

export const addMetric = (index) => ({
  type: ADD_METRIC, payload: { index },
});

export const nextMetric = (index) => ({
  type: NEXT_METRIC, payload: { index },
});

export const lastMetric = (index) => ({
  type: LAST_METRIC, payload: { index },
});

export const addMetricSetting = (index, setting) => ({
  type: ADD_METRIC_SETTING, payload: { index, setting },
});

export const addChart = (index) => ({
  type: ADD_CHART, payload: { index },
});

export const nextChart = (index) => ({
  type: NEXT_CHART, payload: { index },
});

export const lastChart = (index) => ({
  type: LAST_CHART, payload: { index },
});
