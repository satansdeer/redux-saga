import {takeLatest, call, put} from 'redux-saga/effects'
import {LOAD_NOTES, setNotes} from './actions'
import { getNotes } from './api'

export function* loadNotesWatcher(){
  yield takeLatest(LOAD_NOTES, loadNotesFlow)
}

function* loadNotesFlow() {
  console.log("++++")
  const notes = yield call(getNotes)
  console.log(' ----',notes)
  yield put(setNotes(notes))
}