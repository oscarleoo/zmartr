import { REGISTER, LOGIN } from '../actions/authentication';
import { CREATE_MESSAGE, CLOSE_MESSAGE } from '../actions/message';

const initialState = {
  message: {
    text: '',
    type: 'warning',
    open: false,
  },
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${REGISTER}_FULFILLED`: {
      return {
        ...state,
        type: action.payload.data.message.type,
        text: action.payload.data.message.text,
        open: true,
      };
    }
    case `${LOGIN}_FULFILLED`: {
      if (action.payload.data.message) {
        return {
          ...state,
          type: action.payload.data.message.type,
          text: action.payload.data.message.text,
          open: true,
        };
      }
      return state;
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
