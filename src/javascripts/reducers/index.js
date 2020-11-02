import { combineReducers } from "redux";
import noteSounds from "./NoteSound";
import pressedNote from "./PressedNote";

export default combineReducers({ pressedNote, noteSounds });
