import React, { useState } from "react";
import { Grid } from "@material-ui/core";
import Key from "../Key/Key";
import "./Piano.scss";

const Piano = () => {
  const [keySize, setKeySize] = useState<number>(80);
  const [whiteKeys, setWhiteKeys] = useState<Array<string>>([
    "null",
    "G",
    "null",
    "A",
    "null",
    "B",
    "null",
    "C",
    "null",
    "D",
    "null",
    "E",
    "null",
    "F",
  ]);

  const [blackKeys, setBlackKeys] = useState<Array<string>>([
    "Gb",
    "null",
    "Ab",
    "null",
    "Bb",
    "null",
    "null",
    "null",
    "C♯",
    "null",
    "Eb",
    "null",
    "null",
    "null",
    "Fs",
    "null",
  ]);

  return (
    <div className="piano">
      <div className="piano__black">
        {blackKeys.map((key, index) => {
          return (
            <Key
              key={index}
              index={index}
              name={key}
              width={keySize}
              height={keySize + 5}
              isWhite={false}
            />
          );
        })}
      </div>
      <div className="piano__white">
        {whiteKeys.map((key, index) => {
          return (
            <Key
              key={index}
              index={index}
              name={key}
              width={keySize}
              height={keySize + 5}
              isWhite={true}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Piano;
