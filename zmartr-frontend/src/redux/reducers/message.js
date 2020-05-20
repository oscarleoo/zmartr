import { CREATE_MESSAGE, CLOSE_MESSAGE } from '../actions/message';

const initialState = {
  text: '',
  type: 'warning',
  open: false,
};

const messageReducer = (state = initialState, action) => {
  switch (action.type) {
    case CREATE_MESSAGE: {
      return {
        ...state,
        type: action.payload.type,
        text: action.payload.text,
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
