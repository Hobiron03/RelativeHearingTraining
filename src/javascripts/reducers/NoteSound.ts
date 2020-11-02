import { SET_NOTE_SOUND } from "../actions";

interface NoteSoundsAction {
  type: string;
  noteSounds: {};
}

const noteSounds = (state = {}, action: NoteSoundsAction) => {
  switch (action.type) {
    case SET_NOTE_SOUND:
      const newState = {
        ...state,
        noteSounds: action.noteSounds,
      };
      return newState;

    default:
      return state;
  }
};

export default noteSounds;
