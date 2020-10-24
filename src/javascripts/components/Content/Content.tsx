import React, { useState } from "react";
import Config from "../Config/Config";
import Quiz from "../Quiz/Quiz";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";

const Content = () => {
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
            <Quiz musicKey={musicKey} level={level}></Quiz>
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
