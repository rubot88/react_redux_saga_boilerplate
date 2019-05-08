import { call, put, takeLatest } from 'redux-saga/effects'
import { actions, types } from '../utils/actionCreator'
import { Api } from '../entries/ApiTransport'
import { push } from 'connected-react-router'
import { Routes } from '../constants/routes'
import * as url from '../constants/apiUrl'

const api = Api.getInstance()

function* login({ payload }) {
  try {
    const { data: { token, user } } = yield call(() => api.post(url.AUTH, payload))

    yield put(actions.AUTH_USER.SUCCESS(token))
    localStorage.setItem('jwtToken', token)

    console.log('user:', user)
    /**
     * Dispatch action
     * Set user to store
     * Example: yield put(actions.FETCH_USER.SUCCESS(user))
     * 
     * Redirect to private route
     * Example: yield put(push(...))
     */

  } catch (err) {
    yield put(actions.AUTH_USER.FAILED({
      error: err.response.data
    }))
    localStorage.removeItem('jwtToken')

  }
}

function* logout(){
  yield put(actions.AUTH_USER.SUCCESS(null))
  yield put(actions.FETCH_USER.SUCCESS({}))
  localStorage.removeItem('jwtToken')
  yield put(push(Routes.SIGN_IN))
}

export default function* userAuthWatcher() {
  yield takeLatest(types.AUTH_USER.REQUEST, login)
  yield takeLatest(types.LOGOUT.REQUEST, logout)
}

