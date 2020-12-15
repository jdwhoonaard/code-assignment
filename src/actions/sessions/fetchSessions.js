import actionTypes from '../../action-types'

export default (sorting, page) => ({
  type: actionTypes.SESSIONS.FETCH_SESSIONS,
  meta: {
    sorting,
    page,
  },
})
