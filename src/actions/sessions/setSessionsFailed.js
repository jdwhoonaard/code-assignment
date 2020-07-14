import actionTypes from '../../action-types'

export default (payload) => ({
  type: actionTypes.SESSIONS.SET_SESSIONS_FAILED,
  payload,
})
