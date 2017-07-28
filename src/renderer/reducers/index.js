import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'

import example from './exampleReducers'

export default combineReducers({
  example,
  router: routerReducer
})
