import React from "react";
import Piano from "../Piano/Piano";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Slider from "@material-ui/core/Slider";
import "./Quiz.scss";

interface QuizProps {
  musicKey: string;
  level: string;
}

const useStyles = makeStyles({
  root: {
    width: 300,
  },
});

function valuetext(value) {
  return `${value}門目`;
}

const Quiz = (props: QuizProps) => {
  return (
    <div className="quiz">
      <h1 className="quiz__title">Quiz</h1>
      <div className="quiz__header">
        <h2>Level: {props.level}</h2>
        <h2>key: {props.musicKey} </h2>
      </div>

      <Typography id="discrete-slider" gutterBottom>
        残りの問題
      </Typography>
      <Slider
        defaultValue={1}
        getAriaValueText={valuetext}
        aria-labelledby="discrete-slider"
        valueLabelDisplay="auto"
        step={1}
        marks
        min={1}
        max={10}
      />
      <Piano></Piano>
    </div>
  );
};

export default Quiz;
