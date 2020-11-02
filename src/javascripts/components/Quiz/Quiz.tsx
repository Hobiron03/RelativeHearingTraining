import React, { useState, useEffect, useContext } from "react";
import AppContext from "../../contexts/AppContext.js";
import Piano from "../Piano/Piano";
import QuizTop from "../QuizTop/QuizTop";
import Button from "@material-ui/core/Button";
import Fab from "@material-ui/core/Fab";
import ArrowRightIcon from "@material-ui/icons/ArrowRight";
import ArrowLeftIcon from "@material-ui/icons/ArrowLeft";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import Slider from "@material-ui/core/Slider";
import "./Quiz.scss";

interface QuizProps {
  musicKey: string;
  level: string;
  currentQuestion?: number;
  mainSound?: HTMLAudioElement;
  questionSound?: HTMLAudioElement;
}
//ここでクイズを作っておく？

const Quiz = (props: QuizProps) => {
  console.log("Render Quiz component");
  return (
    <div className="quiz">
      <QuizTop></QuizTop>

      <div className="quiz__piano">
        <Piano></Piano>
      </div>

      <div className="quiz__footer">
        <Fab color="primary" aria-label="back">
          <ArrowLeftIcon />
        </Fab>
        <Fab color="primary" aria-label="next">
          <ArrowRightIcon />
        </Fab>
      </div>
    </div>
  );
};

export default Quiz;
