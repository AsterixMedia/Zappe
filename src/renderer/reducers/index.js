import { combineReducers } from 'redux'
import { routerReducer as router } from 'react-router-redux'

import example from './exampleReducer'
import ui from './UiReducer'

export default combineReducers({
  example,
  router,
  ui
})
