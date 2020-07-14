import { combineReducers } from 'redux'
import authentication from './authentication'
import sessions from './sessions'

export default combineReducers({
  authentication,
  sessions,
})
