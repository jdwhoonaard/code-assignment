import createSagaMiddleware from 'redux-saga'
import {
  applyMiddleware,
  createStore,
} from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'

import reducers from './reducers'
import sagas from './sagas'
import isDevelopment from './modules/isDevelopment'

const cookieOptions = {
  expiration: {
    default: 90 * 86400,
  },
}

if (!isDevelopment) {
  cookieOptions.setCookieOptions = {
    path: '/',
    secure: true,
    samesite: 'strict',
    domain: window.location.host,
  }
}

const sagaMiddleware = createSagaMiddleware()

const store = createStore(reducers, {}, composeWithDevTools(applyMiddleware(sagaMiddleware)))

sagaMiddleware.run(sagas)

export {
  store,
}
