import { REGISTER } from '../actions/authentication';
import { DISPLAY_MESSAGE } from '../actions/message'

const initialState = {
  message: {
    open: true,
    message: 'TestMessage',
    type: 'warning'
  },
}

const messageReducer = (state=initialState, action) => {
  switch(action.type) {
    case `${REGISTER}_FULFILLED`: {
      return Object.assign({}, state, {
        type: action.payload.data.message.type,
        message: action.payload.data.message.message,
        open: true
      })
    }
    case DISPLAY_MESSAGE: {
      return Object.assign({}, state, {
        open: action.payload
      })
    }
    default: 
      return state
  }
}

export default messageReducer
