import actionTypes from '../../action-types'

export default (payload, meta) => ({
  type: actionTypes.SESSIONS.SET_SESSIONS,
  payload,
  meta,
})
