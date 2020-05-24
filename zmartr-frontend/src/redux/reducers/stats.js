import { GET_ALL_TASKS } from "../actions/tasks";
import { ADD_TO_TAGS, REMOVE_FROM_TAGS, ADD_TO_STATUS, REMOVE_FROM_STATUS } from "../actions/stats";

const initialState = {
  tasks: [],
  tagFilter: [],
  statusFilter: [],
};

const statsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_ALL_TASKS}_FULFILLED`: {
      return {
        ...state,
        tasks: action.payload.data.list,
      };
    }
    case ADD_TO_TAGS: {
      return {
        ...state,
        tagFilter: [...state.tagFilter.slice(), action.payload],
      };
    }
    case REMOVE_FROM_TAGS: {
      return {
        ...state,
        tagFilter: state.tagFilter.filter((tag) => tag !== action.payload),
      };
    }
    case ADD_TO_STATUS: {
      return {
        ...state,
        statusFilter: [...state.statusFilter.slice(), action.payload],
      };
    }
    case REMOVE_FROM_STATUS: {
      return {
        ...state,
        statusFilter: state.statusFilter.filter((tag) => tag !== action.payload),
      };
    }
    default:
      return state;
  }
};

export default statsReducer;
