import { LOGIN, LOGOUT } from '../actions/authentication';

const initialState = {
  user: {},
  token: ''
}

const authenticationReducer = (state=initialState, action) => {
  switch(action.type) {
    case `${LOGIN}_FULFILLED`: {
      return Object.assign({}, state, {
        token: action.payload.data.token,
        user: action.payload.data.user,
      })
    }
    case LOGOUT: {
      return Object.assign({}, state, {
        token: '',
        user: {},
      })
    }
    default: 
      return state
  }
}

export default authenticationReducer
