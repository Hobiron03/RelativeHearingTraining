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
import noteSounds from "src/javascripts/reducers/NoteSound.js";

interface QuizProps {
  musicKeyName: string;
  level: string;

  currentQuestion?: number;
  mainSound?: HTMLAudioElement;
  questionSound?: HTMLAudioElement;
}
//ここでクイズを作っておく？
interface Question {
  id: number;
  sound: HTMLAudioElement;
  soundName: string;
}
interface QuizData {
  keySound: HTMLAudioElement;
  keySoundName: string;
  questions: Array<Question>;
}
const mock = [
  {
    id: 1,
  },
];

const Quiz = (props: QuizProps) => {
  const { state, dispatch } = useContext(AppContext);
  const [isCreated, setIsCreated] = useState<boolean>(false);

  useEffect(() => {
    CreateQuizData();
  }, []);

  const solveResult = () => {
    console.log("soloveRes");
    console.log(props.mainSound);
    if (state.pressedNote.pressedNote === "C") {
      return (
        <div>
          <p>正解！！！</p>
        </div>
      );
    } else if (state.pressedNote !== "") {
      return (
        <div>
          <p>matigai</p>
        </div>
      );
    } else {
      return;
    }
  };

  const CreateQuizData = (): QuizData => {
    const quizData = {
      keySound: state.noteSounds.C,
      keySoundName: props.musicKeyName,
      questions: [],
    };

    for (let i = 0; i < 10; i++) {
      const question = {
        id: i,
      };
      quizData.questions.push();
    }

    setIsCreated(true);
    return;
  };

  console.log("Render Quiz component");
  return (
    <div className="quiz">
      <QuizTop></QuizTop>

      {solveResult()}

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
