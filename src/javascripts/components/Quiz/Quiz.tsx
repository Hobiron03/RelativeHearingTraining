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

const Quiz = (props: QuizProps) => {
  const { state, dispatch } = useContext(AppContext);
  const [isCreated, setIsCreated] = useState<boolean>(false);
  const [currentQuestionNumber, setCurrentQuestionNumber] = useState<number>(1);
  const [quizData, setQuizData] = useState<QuizData>({
    keySound: state.noteSounds.C,
    keySoundName: "C",
    questions: [],
  });

  useEffect(() => {
    const init = async () => {
      await setQuizData(CreateQuizData());
    };
    init();
  }, []);

  const solveResult = () => {
    console.log(quizData);
    if (quizData.questions[currentQuestionNumber - 1]) {
      console.log(quizData.questions[0].soundName);

      if (
        state.pressedNote.pressedNote ===
        quizData.questions[currentQuestionNumber - 1].soundName
      ) {
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
    }
  };

  // TODO：state.noteSoundsからランダムで音を選ぶ
  // TODO2: コードをリファクタリングする
  const ReturnRondomSound = () => {
    const randomNum = Math.floor(Math.random() * (13 - 1) + 1);
    switch (randomNum) {
      case 1:
        return { sound: state.noteSounds.Gb, soundName: "Gb" };
      case 2:
        return { sound: state.noteSounds.G, soundName: "G" };
      case 3:
        return { sound: state.noteSounds.Ab, soundName: "Ab" };
      case 4:
        return { sound: state.noteSounds.A, soundName: "A" };
      case 5:
        return { sound: state.noteSounds.Bb, soundName: "Bb" };
      case 6:
        return { sound: state.noteSounds.B, soundName: "B" };
      case 7:
        return { sound: state.noteSounds.C, soundName: "C" };
      case 8:
        return { sound: state.noteSounds.Db, soundName: "Db" };
      case 9:
        return { sound: state.noteSounds.D, soundName: "D" };
      case 10:
        return { sound: state.noteSounds.Eb, soundName: "Eb" };
      case 11:
        return { sound: state.noteSounds.E, soundName: "E" };
      case 12:
        return { sound: state.noteSounds.F, soundName: "F" };
      case 13:
        return { sound: state.noteSounds.Fs, soundName: "Fs" };
    }
  };

  // TODO: Quizデータを作る
  const CreateQuizData = (): QuizData => {
    const quizData = {
      keySound: state.noteSounds.C,
      keySoundName: props.musicKeyName,
      questions: [],
    };

    for (let i = 0; i < 10; i++) {
      const soundInfo: {
        sound: HTMLAudioElement;
        soundName: string;
      } = ReturnRondomSound();
      const question = {
        id: i,
        // TODO: set random sound & sound name
        sound: soundInfo.sound,
        soundName: soundInfo.soundName,
      };
      quizData.questions.push(question);
    }

    setIsCreated(true);
    return quizData;
  };

  //矢印ボタンを押すと次の問題に進むgo or 前に戻るback
  const ChagneQuestion = (dirction: string) => {
    if (dirction === "go") {
      currentQuestionNumber === 10
        ? setCurrentQuestionNumber(10)
        : setCurrentQuestionNumber(currentQuestionNumber + 1);
    } else {
      currentQuestionNumber === 1
        ? setCurrentQuestionNumber(1)
        : setCurrentQuestionNumber(currentQuestionNumber - 1);
    }

    console.log(currentQuestionNumber);
  };

  return (
    <div className="quiz">
      <QuizTop currentQuestionNumber={currentQuestionNumber}></QuizTop>

      {solveResult()}

      <div className="quiz__piano">
        <Piano></Piano>
      </div>

      <div className="quiz__footer">
        <Fab
          color="primary"
          aria-label="back"
          onClick={() => ChagneQuestion("back")}
        >
          <ArrowLeftIcon />
        </Fab>
        <Fab
          color="primary"
          aria-label="go"
          onClick={() => ChagneQuestion("go")}
        >
          <ArrowRightIcon />
        </Fab>
      </div>
    </div>
  );
};

export default Quiz;
