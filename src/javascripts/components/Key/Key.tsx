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

  return (
    <div className={`key ${props.isWhite ? classes.white : classes.black}`}>
      <h3 className="key__name">{props.name}</h3>
    </div>
  );
};

export default Key;
