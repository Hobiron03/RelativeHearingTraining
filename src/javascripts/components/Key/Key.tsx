import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/styles";
import AppContext from "../../contexts/AppContext.js";
import { SET_PRESSED_NOTE } from "../../actions/index";
import "./Key.scss";
interface KeyProps {
  index: number;
  width: number;
  height: number;
  isWhite: boolean;
  name?: string;
  sound: HTMLAudioElement;
}

const Key = (props: KeyProps): JSX.Element => {
  const { state, dispatch } = useContext(AppContext);

  const [sound, setsound] = useState<HTMLAudioElement>(props.sound);

  const [keyMargin, setKeyMargin] = useState<number>(45);

  const useStyles = makeStyles({
    white: {
      position: "absolute",
      left: keyMargin * props.index + 135,
      width: props.width,
      height: props.height,
      backgroundColor: "#FFFFFF",
      color: "#000000",
      "&:hover": {
        backgroundColor: "#e7e7e7",
      },
    },
    black: {
      position: "absolute",
      left: keyMargin * props.index + 135,
      width: props.width,
      height: props.height,
      backgroundColor: "#000000",
      color: "#FFFFFF",
      "&:hover": {
        backgroundColor: "#2c2c2c",
      },
    },
    null: {
      width: props.width,
      height: props.height,
    },
  });
  const classes = useStyles();

  const PlaySound = () => {
    if (sound) {
      if (sound.paused) {
        sound.play();
      } else {
        sound.currentTime = 0;
      }
      dispatch({ type: SET_PRESSED_NOTE, pressedNote: props.name });
    }
  };

  return props.name !== "null" ? (
    <div
      className={`key ${props.isWhite ? classes.white : classes.black}`}
      onClick={PlaySound}
    >
      <h3 className="key__name">{props.name}</h3>
    </div>
  ) : (
    <div>
      <h3 className={classes.null}></h3>
    </div>
  );
};

export default Key;
