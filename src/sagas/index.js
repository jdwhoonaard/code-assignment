import {
  all,
  spawn,
} from 'redux-saga/effects'
import onSignIn from './onSignIn'
import onFetchSessions from './onFetchSessions';

const rootSaga = function* rootSaga() {
  yield all([
    spawn(onSignIn),
    spawn(onFetchSessions),
  ])
}

export default rootSaga
