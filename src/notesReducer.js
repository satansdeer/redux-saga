import { ADD_NOTE, SET_NOTES } from "./actions"

const initialState = {
  notes: []
}

export const notesReducer = (state = initialState, action) => {
  switch(action.type){
    case ADD_NOTE: {
      return {...state, notes: [...state.notes, action.payload]}
    }
    case SET_NOTES: {
      return {...state, notes: action.payload}
    }
    default:
      return state
  }
}
