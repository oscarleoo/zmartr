import {
  OPEN_TAG_EDITOR,
  CLOSE_TAG_EDITOR,
  UPDATE_TAGS,
  CREATE_TAG,
} from '../actions/tags';
import { GET_ACTIVE_TASKS } from '../actions/tasks';
import updateOrAddToList from './utils/updateOrAddToList';

const emptyTask = {
  _id: 'tempId',
  title: '',
  tags: [],
  actions: [],
};

const initialState = {
  availableTags: [],
  editorOpen: false,
  taskToEdit: emptyTask,
};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${CREATE_TAG}_FULFILLED`: {
      return {
        ...state,
        availableTags: updateOrAddToList(state.availableTags, action.payload.data),
      };
    }
    case `${UPDATE_TAGS}_FULFILLED`: {
      return {
        ...state,
        taskToEdit: action.payload.data,
      };
    }
    case OPEN_TAG_EDITOR: {
      return {
        ...state,
        editorOpen: true,
        taskToEdit: action.payload.task,
      };
    }
    case CLOSE_TAG_EDITOR: {
      return {
        ...state,
        editorOpen: false,
        taskToEdit: emptyTask,
      };
    }
    case `${GET_ACTIVE_TASKS}_FULFILLED`: {
      return {
        ...state,
        availableTags: action.payload.data.availableTags,
      };
    }
    default:
      return state;
  }
};

export default tagsReducer;
