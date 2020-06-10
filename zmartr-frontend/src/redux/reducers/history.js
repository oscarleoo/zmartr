import { GET_HISTORY, REVERT_ACTION, UPDATE_ACTION } from '../actions/history';
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
    case `${UPDATE_ACTION}_FULFILLED`: {
      const { taskId, actionIndex, date } = action.payload.data;
      return {
        ...state,
        list: state.list.map((listItem) => {
          if (listItem._id === taskId && listItem.index === actionIndex) {
            return {
              ...listItem,
              date,
            };
          }

          return listItem;
        }),
      };
    }
    default:
      return state;
  }
};

export default historyReducer;
