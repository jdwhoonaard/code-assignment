import actionTypes from '../action-types';

const initialState = {
  authenticated: false,
  failure: false,
}

export default (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.AUTHENTICATION.SIGN_IN:
      return {
        ...state,
        authenticated: action.payload === 'private-key',
        failure: false,
      }
    case actionTypes.AUTHENTICATION.SIGN_OUT:
      return {
        ...state,
        authenticated: false,
        failure: false,
      }
    case actionTypes.AUTHENTICATION.FAILURE:
      return {
        ...state,
        failure: true,
      }
    default:
      return state
  }
}
