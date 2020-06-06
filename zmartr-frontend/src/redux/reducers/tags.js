import {
  CREATE_TAG,
  HIDE_TAG,
  UPDATE_TAG,
} from '../actions/tags';
import { GET_TASKS } from '../actions/tasks';
import updateOrAddToList from './utils/updateOrAddToList';
import updateListWithItem from './utils/updateListWithItem';
import removeFromList from './utils/removeFromList';

const initialState = {
  availableTags: [],
};

const tagsReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${CREATE_TAG}_FULFILLED`: {
      return {
        ...state,
        availableTags: updateOrAddToList(state.availableTags, action.payload.data),
      };
    }
    case `${UPDATE_TAG}_FULFILLED`: {
      return {
        ...state,
        availableTags: updateListWithItem(state.availableTags, action.payload.data),
      };
    }
    case `${GET_TASKS}_FULFILLED`: {
      return {
        ...state,
        availableTags: action.payload.data.availableTags,
      };
    }
    case `${HIDE_TAG}_FULFILLED`: {
      return {
        ...state,
        availableTags: removeFromList(state.availableTags, action.payload.data),
      };
    }
    default:
      return state;
  }
};

export default tagsReducer;
