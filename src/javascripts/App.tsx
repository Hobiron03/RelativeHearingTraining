import React, { useReducer } from "react";
import AppContext from "./contexts/AppContext.js";
import reducer from "./reducers/";
import Header from "./components/Header/Header";
import Piano from "./components/Piano/Piano";
import Content from "./components/Content/Content";
import "../stylesheets/main.scss";
import "normalize.css";

export const App = () => {
  const initialState = {
    pressedKey: "",
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <div className="App">
        <Header />
        <div className="App__content">
          <h2 className="App__content__description">
            ♫相対音感を鍛えて最強になろう♫
          </h2>

          <Content></Content>
        </div>
      </div>
    </AppContext.Provider>
  );
};

export default App;
