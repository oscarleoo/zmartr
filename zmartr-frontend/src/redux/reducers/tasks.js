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
import { UPDATE_TAGS } from '../actions/tags';
import updateListWithItem from './utils/updateListWithItem';
import updateListWithList from './utils/updateListWithList';

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
    case `${UPDATE_TAGS}_FULFILLED`: {
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
    default:
      return state;
  }
};

export default tasksReducer;
