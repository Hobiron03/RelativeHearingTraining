import React, { useState, useContext } from "react";
import AppContext from "../../contexts/AppContext.js";
import { SET_NOTE_SOUND } from "../../actions/index";
import FetchSoundData from "../../FetchSoundData";
import Config from "../Config/Config";
import Quiz from "../Quiz/Quiz";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";

const Content = () => {
  const { dispatch } = useContext(AppContext);
  const [level, setLevel] = useState<string>("初級");
  const [musicKey, setMusicKey] = useState<string>("C");
  const [isScreen, toggleScreen] = useState<boolean>(false);

  const onQuizStart = () => {
    toggleScreen(true);
  };

  const onSetLevel = (level: string) => {
    setLevel(level);
  };

  const onSetKey = (key: string) => {
    setMusicKey(key);
  };

  return (
    <div>
      <Card>
        <CardContent>
          {isScreen ? (
            <Quiz></Quiz>
          ) : (
            <Config
              onQuizStart={onQuizStart}
              onSetLevel={onSetLevel}
              onSetKey={onSetKey}
            ></Config>
          )}
        </CardContent>
      </Card>
    </div>
  );
};

export default Content;
