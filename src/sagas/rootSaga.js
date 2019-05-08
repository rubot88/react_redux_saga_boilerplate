import { all, fork } from 'redux-saga/effects'

import userAuthWatcher from './authSaga'
import userWatcher from './userSaga'

export default function* rootSaga() {
  yield all([
    fork(userAuthWatcher),
    fork(userWatcher)
    // TODO -> Fork another sagas
  ])
}

