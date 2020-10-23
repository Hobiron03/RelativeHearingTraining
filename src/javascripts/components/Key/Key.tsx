import React from "react";
import { makeStyles } from "@material-ui/styles";

import "./Key.scss";
interface KeyProps {
  width: number;
  height: number;
  isWhite: boolean;
  name: string;
}

const Key = (props: KeyProps): JSX.Element => {
  const audio = new Audio("../../../medias/oyasumi.mp3"); //　コンストラクタでaudio要素を生成

  const useStyles = makeStyles({
    white: {
      width: props.width,
      height: props.height,
      backgroundColor: "#FFFFFF",
      color: "#000000",
    },
    black: {
      width: props.width,
      height: props.height,
      backgroundColor: "#000000",
      color: "#FFFFFF",
    },
  });
  const classes = useStyles();

  const PlaySound = () => {
    console.log("play sound");
    audio.play();
  };

  return (
    <div
      className={`key ${props.isWhite ? classes.white : classes.black}`}
      onClick={PlaySound}
    >
      <h3 className="key__name">{props.name}</h3>
    </div>
  );
};

export default Key;
