import {
  CREATE_TASK,
  GET_TASKS,
  START_TASK,
  STOP_TASK,
  FINISH_TASK,
  ARCHIVE_TASK,
  UPDATE_SEARCH_STRING,
  UPDATE_TASK,
  ORDER_TASKS,
} from '../actions/tasks';
import updateListWithItem from './utils/updateListWithItem';
import updateListWithList from './utils/updateListWithList';
import { UPDATE_TAGS } from '../actions/tags';
import { REVERT_ACTION, UPDATE_ACTION } from '../actions/history';

const emptyTask = {
  _id: 'tempId',
  title: '',
  tags: [],
  actions: [],
};

const initialState = {
  list: [],
  loading: false,
  searchString: '',
};

const tasksReducer = (state = initialState, action) => {
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
        list: updateListWithItem(state.list, action.payload.data),
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
        loading: false,
      };
    }
    case `${START_TASK}_FULFILLED`: {
      return {
        ...state,
        list: updateListWithList(state.list, action.payload.data),
      };
    }
    case `${STOP_TASK}_FULFILLED`: {
      return {
        ...state,
        list: updateListWithItem(state.list, action.payload.data),
      };
    }
    case `${FINISH_TASK}_FULFILLED`: {
      return {
        ...state,
        list: updateListWithItem(state.list, action.payload.data),
      };
    }
    case `${ARCHIVE_TASK}_FULFILLED`: {
      return {
        ...state,
        list: updateListWithItem(state.list, action.payload.data),
      };
    }
    case `${ORDER_TASKS}_FULFILLED`: {
      return {
        ...state,
        list: state.list.slice().sort((a, b) => (
          action.payload.data.indexOf(a._id) > action.payload.data.indexOf(b._id) ? 1 : -1
        )),
      };
    }
    case `${UPDATE_TAGS}_FULFILLED`: {
      return {
        ...state,
        list: updateListWithItem(state.list, action.payload.data),
      };
    }
    case `${REVERT_ACTION}_FULFILLED`: {
      return {
        ...state,
        list: state.list.map((task) => {
          if (task._id === action.payload.data) {
            task.actions.pop();
          }

          return task;
        }),
      };
    }
    case `${UPDATE_ACTION}_FULFILLED`: {
      const { taskId, actionIndex, date } = action.payload.data;
      return {
        ...state,
        list: state.list.map((task) => {
          if (actionIndex && task._id === taskId) {
            const { actions } = task;
            actions[actionIndex].date = date;
            return {
              ...task,
              actions,
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
