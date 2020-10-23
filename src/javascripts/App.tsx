import React from "react";
import Hello from "./components/Hello/Hello";
import Piano from "./components/Piano/Piano";

export const App = () => {
  return (
    <div>
      <h1>Hello, React</h1>
      <Piano />
      <Hello></Hello>
    </div>
  );
};

export default App;
