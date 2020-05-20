import {
  CREATE_TASK,
  GET_TASKS,
  START_TASK,
  STOP_TASK,
  FINISH_TASK,
  ARCHIVE_TASK,
  UPDATE_SEARCH_STRING,
  UPDATE_TASK,
} from '../actions/tasks';
import { UPDATE_TAGS } from '../actions/tags';

const initialState = {
  list: [],
  selected: null,
  loading: false,
  searchString: '',
};

const emptyTask = {
  _id: 'tempId',
  title: '',
  tags: [],
  actions: [],
};

const tasksReducer = (state = initialState, action) => {
  console.log(action);
  switch (action.type) {
    case UPDATE_SEARCH_STRING: {
      return {
        ...state,
        searchString: action.payload.text.toLowerCase(),
      };
    }
    case CREATE_TASK: {
      return {
        ...state,
        list: [...state.list, emptyTask],
      };
    }
    case `${UPDATE_TASK}_FULFILLED`: {
      return {
        ...state,
        list: state.list.map((task) => {
          if (task._id === action.payload.data._id) {
            return {
              ...action.payload.data,
            };
          }
          return task;
        }),
      };
    }
    case `${GET_TASKS}_PENDING`: {
      return {
        ...state,
        loading: true,
      };
    }
    case `${GET_TASKS}_FULFILLED`: {
      return {
        ...state,
        list: action.payload.data.list,
        selected: action.payload.data.selected,
        loading: false,
      };
    }
    case `${START_TASK}_FULFILLED`: {
      return {
        ...state,
        list: action.payload.data.list,
        selected: action.payload.data.selected,
      };
    }
    case `${STOP_TASK}_FULFILLED`: {
      return {
        ...state,
        list: action.payload.data.list,
        selected: action.payload.data.selected,
      };
    }
    case `${FINISH_TASK}_FULFILLED`: {
      return {
        ...state,
        list: action.payload.data.list,
        selected: action.payload.data.selected,
      };
    }
    case `${ARCHIVE_TASK}_FULFILLED`: {
      return {
        ...state,
        list: action.payload.data.list,
        selected: action.payload.data.selected,
      };
    }
    case `${UPDATE_TAGS}_FULFILLED`: {
      return {
        ...state,
        list: state.list.map((task) => {
          if (task._id === action.payload.data._id) {
            return {
              ...action.payload.data,
            };
          }
          return task;
        }),
      };
    }
    default:
      return state;
  }
};

export default tasksReducer;
