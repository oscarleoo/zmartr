import { combineReducers } from 'redux';
import tasksReducer from './reducers/tasks';
import messageReducer from './reducers/message';
import tagsReducer from './reducers/tags';
import statsReducer from './reducers/stats';
import historyReducer from './reducers/history';

export default combineReducers({
  tags: tagsReducer,
  tasks: tasksReducer,
  stats: statsReducer,
  message: messageReducer,
  history: historyReducer,
});
