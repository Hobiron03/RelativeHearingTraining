import React from "react";
import "./Quiz.scss";

interface QuizProps {
  musicKey: string;
  level: string;
}

const Quiz = (props: QuizProps) => {
  return (
    <div>
      <h2>key: {props.musicKey}</h2>
      <h2>Level: {props.level}</h2>
    </div>
  );
};

export default Quiz;
