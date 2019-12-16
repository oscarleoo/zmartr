import { 
  ADD_TASK, 
  GET_TASKS,
  START_TASK,
  STOP_TASK,
  FINISH_TASK,
  ARCHIVE_TASK,
} from '../actions/tasks'

const initialState = {
  list: [],
  selected: null,
}

const tasksReducer = (state=initialState, action) => {
  
  console.log(action)
  switch(action.type) {
    case `${ADD_TASK}_FULFILLED`: {
      return Object.assign({}, state, {
        list: action.payload.data.list,
        selected: action.payload.data.selected
      })
    }
    case `${GET_TASKS}_FULFILLED`: {
      return Object.assign({}, state, {
        list: action.payload.data.list,
        selected: action.payload.data.selected
      })
    }
    case `${START_TASK}_FULFILLED`: {
      return Object.assign({}, state, {
        list: action.payload.data.list,
        selected: action.payload.data.selected
      })
    }
    case `${STOP_TASK}_FULFILLED`: {
      return Object.assign({}, state, {
        list: action.payload.data.list,
        selected: action.payload.data.selected
      })
    }
    case `${FINISH_TASK}_FULFILLED`: {
      return Object.assign({}, state, {
        list: action.payload.data.list,
        selected: action.payload.data.selected
      })
    }
    case `${ARCHIVE_TASK}_FULFILLED`: {
      return Object.assign({}, state, {
        list: action.payload.data.list,
        selected: action.payload.data.selected
      })
    }
    default: 
      return state
  }
}

export default tasksReducer