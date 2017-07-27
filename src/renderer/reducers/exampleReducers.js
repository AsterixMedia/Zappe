import {
  ADD,
  MINUS
} from '../actions/types'

const INITIAL_STATE = {
  score: 2
}

export default (state = INITIAL_STATE, {type, value = 1}) => {
  switch (type) {
    case (ADD):
      return { score: state.score + value }
    case (MINUS):
      return { score: state.score - value }
    default:
      return state
  }
}
