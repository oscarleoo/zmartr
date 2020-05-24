import { combineReducers } from 'redux';
import tasksReducer from './reducers/tasks';
import messageReducer from './reducers/message';
import tagsReducer from './reducers/tags';
import statsReducer from './reducers/stats';

export default combineReducers({
  tags: tagsReducer,
  tasks: tasksReducer,
  stats: statsReducer,
  message: messageReducer,
});
