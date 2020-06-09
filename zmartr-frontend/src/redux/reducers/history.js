import { GET_HISTORY } from '../actions/history';

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
    default:
      return state;
  }
};

export default historyReducer;
