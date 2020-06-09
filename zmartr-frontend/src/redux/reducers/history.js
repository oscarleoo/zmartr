import { GET_HISTORY, REVERT_ACTION } from '../actions/history';
import updateOnRevert from './utils/history/updateOnRevert';

const initialState = {
  list: [],
};

const historyReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${GET_HISTORY}_FULFILLED`: {
      return {
        ...state,
        list: action.payload.data,
      };
    }
    case `${REVERT_ACTION}_FULFILLED`: {
      return {
        ...state,
        list: updateOnRevert(state.list, action.payload.data),
      };
    }
    default:
      return state;
  }
};

export default historyReducer;
