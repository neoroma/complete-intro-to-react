import { createStore, compose, applyMiddleware } from 'redux'
import { rootReducer } from './reducers'
import thunk from 'redux-thunk'

export const store = createStore(rootReducer, compose(
    applyMiddleware(thunk),
    typeof window === 'object' && typeof window.devToolsExtension !== 'undefined'
        ? window.devToolsExtension()
        : f => f
))
