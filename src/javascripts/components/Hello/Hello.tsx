import React from "react";
import "./Hello.scss";
import { Button } from "@material-ui/core";

export default function Hello() {
  return (
    <div>
      <h1 className="hello">This is Hello, Component!!!!</h1>
      <Button variant="contained" color="primary">
        Primary
      </Button>
    </div>
  );
}
