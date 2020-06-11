export const ADD_NOTE = "ADD_NOTE";
export const SET_NOTES = "SET_NOTES";
export const LOAD_NOTES = "LOAD_NOTES";
export const SAVE_NOTES = "SAVE_NOTES";

export const addNote = (note) => ({
  type: ADD_NOTE,
  payload: note,
});

export const setNotes = (notes) => ({
  type: SET_NOTES,
  payload: notes,
});

export const saveNotes = (notes) => ({
  type: SAVE_NOTES,
  payload: notes,
});

export const loadNotes = () => ({
  type: LOAD_NOTES,
});
