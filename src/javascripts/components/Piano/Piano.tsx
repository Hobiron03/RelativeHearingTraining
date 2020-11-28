import React, { useState, useContext } from "react";
import AppContext from "../../contexts/AppContext.js";
import { Grid } from "@material-ui/core";
import Key from "../Key/Key";
import "./Piano.scss";

const Piano = () => {
  const { state, dispatch } = useContext(AppContext);
  const [pressedKey, setPressedKey] = useState<string>("");
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

  const [whiteKeySounds, setWhiteKeySound] = useState<Array<HTMLAudioElement>>([
    null,
    state.noteSounds.G,
    null,
    state.noteSounds.A,
    null,
    state.noteSounds.B,
    null,
    state.noteSounds.C,
    null,
    state.noteSounds.D,
    null,
    state.noteSounds.E,
    null,
    state.noteSounds.F,
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
    "Db",
    "null",
    "Eb",
    "null",
    "null",
    "null",
    "Fs",
    "null",
  ]);

  const [blackKeySounds, setBlackKeySound] = useState<Array<HTMLAudioElement>>([
    state.noteSounds.Gb,
    null,
    state.noteSounds.Ab,
    null,
    state.noteSounds.Bb,
    null,
    null,
    null,
    state.noteSounds.Db,
    null,
    state.noteSounds.Eb,
    null,
    null,
    null,
    state.noteSounds.Fs,
    null,
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
              sound={blackKeySounds[index]}
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
              sound={whiteKeySounds[index]}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Piano;
