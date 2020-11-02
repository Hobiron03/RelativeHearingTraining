import { SET_PRESSED_NOTE } from "../actions";

interface PressedNoteAction {
  type: string;
  pressedNote: string;
}

const pressedNote = (state = {}, action: PressedNoteAction) => {
  switch (action.type) {
    case SET_PRESSED_NOTE:
      const newState = {
        ...state,
        pressedNote: action.pressedNote,
      };

      return newState;

    default:
      return state;
  }
};

export default pressedNote;
