import initialState from '../store/initialState'
import { createReducer } from '../utils/reducerCreator'
import { types } from '../utils/actionCreator'

export default createReducer(initialState.auth, {
  [types.AUTH_USER.REQUEST](state) {
    return {
      ...state,
      loading: true
    }
  },
  [types.AUTH_USER.SUCCESS](state, action) {
    return {
      ...state,
      isAuthenticated: action.payload !== null,
      token: action.payload,
      loading: false
    }
  },
  [types.AUTH_USER.FAILED](state, action) {
    return {
      ...state,
      loading: false,
      error: action.payload.error
    }
  },
  [types.AUTH_USER.CLEAR](state) {
    return {
      ...state,
      loading: false,
      error: null,
      success: null
    }
  }
})