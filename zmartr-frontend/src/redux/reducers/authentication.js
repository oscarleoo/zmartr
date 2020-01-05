import { LOGIN, LOGOUT } from '../actions/authentication';

const initialState = {
  user: {},
  token: '',
};

const authenticationReducer = (state = initialState, action) => {
  switch (action.type) {
    case `${LOGIN}_FULFILLED`: {
      if (action.payload.data.token) {
        return {
          ...state,
          token: action.payload.data.token,
          user: action.payload.data.user,
        };
      }
      return state;
    }
    case LOGOUT: {
      return {
        ...state,
        token: '',
        user: {},
      };
    }
    default:
      return state;
  }
};

export default authenticationReducer;
