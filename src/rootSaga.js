import {fork} from 'redux-saga/effects'
import {loadNotesWatcher} from './loadNotesSaga'
import {saveNotesWatcher} from './saveNotesSaga'

export function* rootSaga() {
  yield fork(loadNotesWatcher)
  yield fork(saveNotesWatcher)
}