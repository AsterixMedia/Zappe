import { createStore, applyMiddleware, compose } from 'redux'
import logger from 'redux-logger'
import immutableRedux from 'redux-immutable-state-invariant'
import thunk from 'redux-thunk'
import createHistory from 'history/createBrowserHistory'
import routerMiddleware from 'react-router-redux/middleware'

import reducers from '../reducers'

const INITIAL_STATE = {}
const history = createHistory()

const prodMiddlewares = [thunk, routerMiddleware(history)]
const devMiddlewares = [logger, immutableRedux()]

const middlewares = [...prodMiddlewares, ...devMiddlewares]

const store = createStore(
  reducers,
  INITIAL_STATE,
  compose(
    applyMiddleware(...middlewares),
    window.devToolsExtension ? window.devToolsExtension() : f => f
  )
)

export {
  history,
  store
}
