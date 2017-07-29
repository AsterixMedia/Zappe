import {
  TOGGLE_DRAWER,
  SET_DRAWER,
  CLOSE_DRAWER
} from './types'

export const setDrawer = value => ({
  type: SET_DRAWER,
  payload: value
})

export const closeDrawer = () => ({
  type: CLOSE_DRAWER
})

export const toggleDrawer = () => ({
  type: TOGGLE_DRAWER
})
