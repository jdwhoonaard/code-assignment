import actionTypes from '../action-types'

const initialState = {
  loading: false,
  data: null,
  meta: {
    page: 1,
    limit: 50,
    pages: 1,
  },
  errors: null,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.SESSIONS.FETCH_SESSIONS:
      return {
        ...state,
        loading: true,
        errors: null,
      }
    case actionTypes.SESSIONS.SET_SESSIONS:
      return {
        ...state,
        loading: false,
        data: action.payload,
        meta: {
          ...action.meta,
          pages: Math.ceil((action.meta.total || 0) / (action.meta.limit || 50)),
        },
        errors: null,
      }
    case actionTypes.SESSIONS.SET_SESSIONS_FAILED:
      return {
        ...state,
        loading: false,
        errors: action.payload,
      }
    default:
      return state
  }
}
