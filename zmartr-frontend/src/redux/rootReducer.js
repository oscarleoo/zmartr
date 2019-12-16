import { combineReducers } from 'redux'
import tasksReducer from './reducers/tasks'
import authenticationReducer from './reducers/authentication'

export default combineReducers({
    tasks: tasksReducer,
    authentication: authenticationReducer
})