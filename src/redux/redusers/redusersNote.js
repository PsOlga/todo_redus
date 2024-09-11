import noteCount from "../../components/noteCount";
import { ADD_NOTE, DELETE_NOTE } from "../actions/actionsNote";
const initialState = {
  notesList: [],
  noteCount: 0, 
};
const noteReducer = (state = initialState, { type, payload }) => {
  if (type === ADD_NOTE) {
    return {
      ...state,
      noteCount: state.noteCount + 1,
      notesList: [payload, ...state.notesList ],
    };
  }
  if (type === DELETE_NOTE) {
    return {
      ...state,
      noteCount: state.noteCount - 1,
      notesList: state.notesList.filter((note) => note.id !== payload),
    };
  }
  return state;
};
export default noteReducer;
