import { createStore, applyMiddleware } from 'redux'
import {notesReducer} from './notesReducer'
import createSagaMiddleware from 'redux-saga'
import {rootSaga} from './rootSaga'

const sagaMiddleware = createSagaMiddleware()

export const store = createStore(notesReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(rootSaga)