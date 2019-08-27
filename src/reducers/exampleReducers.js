import { combineReducers } from 'redux'
import { ExampleActionTypes } from '@types'


const loginSucceed = (state = false, response) => {
  switch (response.type) {
    case ExampleActionTypes.LOGIN_SUCCEED:
      return true
    case ExampleActionTypes.LOGOUT_SUCCEED:
      return false
    case ExampleActionTypes.REFRESH_TOKEN_REQUEST:
      return false
    default:
      return state
  }
}

export default combineReducers({
  loginSucceed,
})
