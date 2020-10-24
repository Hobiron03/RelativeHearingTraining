import React from "react";
import Header from "./components/Header/Header";
import Piano from "./components/Piano/Piano";
import Content from "./components/Content/Content";
import "../stylesheets/main.scss";
import "normalize.css";

export const App = () => {
  return (
    <div className="App">
      <Header />
      <div className="App__content">
        <h1 className="App__content__description">
          ♫相対音感を鍛えて最強になろう♫
        </h1>
        <p>こんにちは相対音感トレーニングへようこそ</p>
        <Content></Content>
      </div>
    </div>
  );
};

export default App;
