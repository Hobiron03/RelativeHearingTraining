import React from "react";
import Hello from "./components/Hello/Hello";
import Piano from "./components/Piano/Piano";
import "../stylesheets/main.scss";

export const App = () => {
  return (
    <div className="App">
      <h1>Hello, World</h1>
      <Piano />
    </div>
  );
};

export default App;
