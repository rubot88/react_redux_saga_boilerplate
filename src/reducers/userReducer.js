import initialState from '../store/initialState'
import { createReducer } from '../utils/reducerCreator'
import { types } from '../utils/actionCreator'

export default createReducer(initialState.user, {
  [types.FETCH_USER.REQUEST](state) {
    return {
      ...state,
      loading: true
    }
  },
  [types.FETCH_USER.SUCCESS](state, action) {
    return {
      ...state,
      user: action.payload,
      loading: false
    }
  },
  [types.FETCH_USER.FAILED](state, action) {
    return {
      ...state,
      loading: false,
      error: action.error
    }
  },
  [types.FETCH_USER.CLEAR](state) {
    return {
      ...state,
      loading: false,
      error: null,
      type: null,
      success: null
    }
  }
})