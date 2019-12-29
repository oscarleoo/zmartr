import { combineReducers } from 'redux';
import tasksReducer from './reducers/tasks';
import authenticationReducer from './reducers/authentication';
import messageReducer from './reducers/message';

export default combineReducers({
  tasks: tasksReducer,
  authentication: authenticationReducer,
  message: messageReducer,
});
