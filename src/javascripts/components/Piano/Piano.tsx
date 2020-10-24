import React from "react";
import Key from "../Key/Key";
import "./Piano.scss";

const Piano = () => {
  return (
    <div>
      <h1>This is Piano</h1>
      <div className="black"></div>
      <div className="white"></div>
      <Key name="C" width={80} height={80} isWhite={true} />
      <Key name="Cs" width={80} height={80} isWhite={false} />
      <Key name="D" width={80} height={80} isWhite={true} />
    </div>
  );
};

export default Piano;
