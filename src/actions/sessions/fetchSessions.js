import actionTypes from '../../action-types'

export default (page) => ({
  type: actionTypes.SESSIONS.FETCH_SESSIONS,
  meta: {
    page,
  },
})
