import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import immutableRedux from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'

import reducers from '../reducers'

const INITIAL_STATE = {}

const prodMiddlewares = [thunk]
const devMiddlewares = [logger, immutableRedux()]

const middlewares = [...prodMiddlewares, ...devMiddlewares]

export const store = createStore(
  reducers,
  INITIAL_STATE,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)
