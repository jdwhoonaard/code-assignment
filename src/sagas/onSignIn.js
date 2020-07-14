import {
  select,
  put,
  takeLatest,
} from 'redux-saga/effects';
import actionTypes from '../action-types';
import isAuthenticated from '../selectors/authentication/isAuthenticated';
import setAuthenticationFailure from '../actions/authentication/setAuthenticationFailure';

const onSignIn = function* onSignIn() {
  yield takeLatest(actionTypes.AUTHENTICATION.SIGN_IN, function* signIn({ payload: password, history }) {
    const isSignedIn = yield select(isAuthenticated)

    if (isSignedIn) {
      history.push('/sessions')
    } else {
      yield put(setAuthenticationFailure())
    }
  })
}

export default onSignIn
