import {takeLatest, call} from 'redux-saga/effects'
import {SAVE_NOTES} from './actions'
import { postNotes } from './api'

export function* saveNotesWatcher(){
  yield takeLatest(SAVE_NOTES, saveNotesFlow)
}

function* saveNotesFlow(action) {
  yield call(postNotes, action.payload)
}