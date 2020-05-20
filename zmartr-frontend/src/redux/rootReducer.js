import { combineReducers } from 'redux';
import tasksReducer from './reducers/tasks';
import messageReducer from './reducers/message';
import tagsReducer from './reducers/tags';

export default combineReducers({
  tags: tagsReducer,
  tasks: tasksReducer,
  message: messageReducer,
});
