import actionTypes from '../../action-types'

export default (payload) => ({
  type: actionTypes.AUTHENTICATION.SIGN_IN,
  payload,
})
