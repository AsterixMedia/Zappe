import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const INITIAL_STATE = {}

const middlewares = [thunk]

// add dev middlewares
middlewares.push(logger)

export const store = createStore(
  reducers,
  INITIAL_STATE,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
