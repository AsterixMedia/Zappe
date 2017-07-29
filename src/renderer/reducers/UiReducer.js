import {
  TOGGLE_DRAWER,
  CLOSE_DRAWER,
  SET_DRAWER
} from '../actions/types'

const INITIAL_STATE = {
  drawerOpen: false
}

export default (state = INITIAL_STATE, { type, payload }) => {
  switch (type) {
    case (TOGGLE_DRAWER):
      return { ...state, drawerOpen: !state.drawerOpen }
    case (CLOSE_DRAWER):
      return { ...state, drawerOpen: false }
    case (SET_DRAWER):
      return { ...state, drawerOpen: payload }
    default:
      return state
  }
}
