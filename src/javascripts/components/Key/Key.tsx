import React, { useState } from "react";
import { makeStyles } from "@material-ui/styles";

import "./Key.scss";
interface KeyProps {
  index: number;
  width: number;
  height: number;
  isWhite: boolean;
  name?: string;
}

const Key = (props: KeyProps): JSX.Element => {
  const [audio, setAudio] = useState<HTMLAudioElement>(
    new Audio(`../../../medias/${props.name}.wav`)
  );

  const [keyMargin, setKeyMargin] = useState<number>(35);

  const useStyles = makeStyles({
    white: {
      position: "absolute",
      left: keyMargin * props.index + 200,
      width: props.width,
      height: props.height,
      backgroundColor: "#FFFFFF",
      color: "#000000",
    },
    black: {
      position: "absolute",
      left: keyMargin * props.index + 200,
      width: props.width,
      height: props.height,
      backgroundColor: "#000000",
      color: "#FFFFFF",
    },
    null: {
      width: props.width,
      height: props.height,
    },
  });
  const classes = useStyles();

  const PlaySound = () => {
    console.log("play sound");
    if (audio.paused) {
      audio.play();
    } else {
      audio.currentTime = 0;
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
