import { REGISTER } from '../actions/authentication';
import { CREATE_MESSAGE, CLOSE_MESSAGE } from '../actions/message';

const initialState = {
  message: {
    open: false,
    message: '',
    type: 'warning',
  },
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${REGISTER}_FULFILLED`: {
      return {
        ...state,
        type: action.payload.data.message.type,
        message: action.payload.data.message.message,
        open: true,
      };
    }
    case CREATE_MESSAGE: {
      return {
        ...state,
        type: action.payload.type,
        message: action.payload.message,
        open: true,
      };
    }
    case CLOSE_MESSAGE: {
      return {
        ...state,
        message: '',
        open: false,
      };
    }
    default:
      return state;
  }
};

export default messageReducer;
