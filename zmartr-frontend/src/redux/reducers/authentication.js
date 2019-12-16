import { 
    LOGIN, 
} from '../actions/authentication';

const initialState = {
  user: {},
  token: '',
  message: ''
}

const authenticationReducer = (state=initialState, action) => {
  console.log(action)
  switch(action.type) {
    case `${LOGIN}_FULFILLED`: {
      return Object.assign({}, state, {
        token: action.payload.data.token,
        user: action.payload.data.user
      })
    }
    default: 
      return state
  }
}

export default authenticationReducer
